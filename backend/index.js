const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const { query } = require("./database");
const ApiResponse = require("./utils/ApiResponse");
const { sendMail } = require("./utils/sendMail");
const cors = require("cors");
const multer = require("multer");
const { upload } = require("./multer/multer");
const cheerio = require("cheerio");
const request = require("request");

const totalPagesCache = new Map();

app.use(express.json());
app.use(cors());

app.get("/tours", async (req, res) => {
  if (!req.query.page)
    return res
      .status(400)
      .json(new ApiResponse(400, "'page' query is require"));

  const page = parseInt(req.query.page);
  const catname = req.query.catname;
  const table_name = "tour";
  const limit = 12;

  const conditianalQuery = catname ? `WHERE TOUR_TYPE='${catname}'` : "";

  try {
    const totalDocuments = await query(
      `SELECT COUNT(*) AS total_rows FROM ${table_name} ${conditianalQuery}`
    );
    const totalPages = Math.ceil(totalDocuments[0].total_rows / limit);

    const skip = (page - 1) * limit;

    const result = await query(
      `SELECT * FROM ${table_name} ${conditianalQuery} LIMIT ${limit} OFFSET ${skip}`
    );
    res.status(200).json(
      new ApiResponse(200, "Success", {
        tours: result,
        total_page: totalPages,
      })
    );
  } catch (error) {
    res.status(400).json(new ApiResponse(400, error.message, error));
  }
});

app.get("/query", async (req, res) => {
  const tour_type = req.query.tour_type;

  const table_name = "tour";
  const result = await query(
    `SELECT * FROM ${table_name} WHERE TOUR_TYPE = '${tour_type}' LIMIT 12 OFFSET 0`
  );

  res.status(200).json(
    new ApiResponse(200, "Success", {
      tours: result,
      total_page: 1,
    })
  );
});

app.get("/search", async (req, res) => {
  const searchtxt = req.query.q;

  const table_name = "tour";

  if (!searchtxt)
    return res
      .status(400)
      .json(new ApiResponse(400, "enter some search text with 'q' tag"));

  // const sql = `SELECT * FROM ${table_name} WHERE MATCH(TITLE) AGAINST('${searchtxt}')`;
  let sql = `SELECT * FROM ${table_name} WHERE tour.TITLE LIKE ?`;
  // const totalDocuments = await query(sql);

  // console.log(totalDocuments);

  // const totalPages = Math.ceil(totalDocuments[0]?.total_rows / limit);
  // const skip = (page - 1) * limit;

  // sql = `SELECT * FROM tour WHERE tour.TITLE LIKE '${searchtxt}'`;

  const result = await query(sql, [`%${searchtxt}%`]);
  // const result = await query(sql, []);
  res.status(200).json(
    new ApiResponse(200, "Success", {
      tours: result,
      total_page: 1,
    })
  );
});

app.get("/tour/:TITLE", async (req, res) => {
  const tour_title = req.params.TITLE;
  const table_name = req.query.tableName || "tourinfo";

  if (!tour_title)
    return res.status(400).json(new ApiResponse(400, "TITLE is required"));

  const sql = `SELECT * FROM ${table_name} WHERE ${table_name}.URL = ?`;

  try {
    const result = await query(sql, [tour_title]);
    res.status(200).json(result[0]);
  } catch (error) {
    res.status(200).json([]);
  }

  
});

app.post("/sendemail", async (req, res) => {
  const type = req.body.type;

  if (!type)
    return res
      .status(400)
      .json(new ApiResponse(400, "mail 'type' is required"));

  if (!type || type === "tour") {
    try {
      await sendMail(type, {
        name: req.body.name,
        destination: req.body.destination,
        duration: req.body.duration,
        number: req.body.number,
        toEmail: req.body.email,
      });
    } catch (error) {
      return res
        .status(400)
        .json(new ApiResponse(200, "Something went wrong while sending email"));
    }
  }

  if (type === "contact") {
    try {
      await sendMail(type, {
        name: req.body.name,
        number: req.body.number,
        message: req.body.message,
        toEmail: req.body.email,
      });
    } catch (error) {
      return res
        .status(400)
        .json(new ApiResponse(200, "Something went wrong while sending email"));
    }
  }

  // if (type === "rewards") {
  //   try {
  //     await sendMail(type, {
  //       name: req.body.name,
  //       number: req.body.number,
  //       message: req.body.destination,
  //       toEmail: req.body.email,
  //     });
  //   } catch (error) {
  //     return res.status(400).json(new ApiResponse(200, "Something went wrong while sending email"));
  //   }
  // }

  if (type === "book-tour") {
    try {
      await sendMail(type, {
        name: req.body.name,
        toEmail: req.body.email,
        enquiry: req.body.enquiry,
      });
    } catch (error) {
      return res
        .status(400)
        .json(new ApiResponse(200, "Something went wrong while sending email"));
    }
  }

  res.status(200).json(new ApiResponse(200, "Email Has Sended Successfully"));
});

app.get("/filter", async (req, res) => {
  const table_name = "tour";
  const LIMIT = 5;
  const durations = Array.isArray(req.query.duration || []) ? req.query.duration : [req.query.duration];
  const tourTypes = Array.isArray(req.query["tour-type"] || []) ? req.query["tour-type"] : [req.query["tour-type"]];

  let tourTypesTxt = null;
  tourTypes?.forEach((element) => {
    if(!tourTypesTxt) {
      tourTypesTxt = `'${element}'`
    }else {
      tourTypesTxt += `,'${element}'`
    }
  })

  let durationTxt = null;
  durations?.forEach((element) => {
    if(!durationTxt) {
      durationTxt = `'${element}'`
    }else {
      durationTxt += `,'${element}'`
    }
  })

  let newSql = `SELECT * FROM ${table_name} WHERE TOUR_TYPE IN (${tourTypesTxt}) ${durationTxt ? `AND TIME IN (${durationTxt})` : ""}`;
  // console.log(newSql);

  let sql = `SELECT * FROM ${table_name}`;

  if(!tourTypesTxt && durationTxt) {
    sql += ` WHERE TIME IN (${durationTxt})`;
  }

  if(tourTypesTxt && !durationTxt) {
    sql += ` WHERE TOUR_TYPE IN (${tourTypesTxt})`;
  }

  if(tourTypesTxt && durationTxt) {
    sql += ` WHERE TOUR_TYPE IN (${tourTypesTxt}) AND TIME IN (${durationTxt})`;
  }

  // console.log(sql);


  // const totalDocuments = await query(newSql);

  // const totalPages = Math.ceil(totalDocuments?.[0].total_rows / LIMIT);

  // const SKIP = (1 - 1) * LIMIT;
  
  // newSql += ` LIMIT ${LIMIT} OFFSET ${SKIP}`;

  // console.log(newSql)

  // const filters = {
  //   duration : durations,
  //   "tour-type" : tourTypes
  // }

  // const filtersKeys = {
  //   duration : "TIME",
  //   "tour-type" : "TOUR_TYPE",
  // };

  // let sql_condition = null;

  // Object.entries(filters).forEach(([key, value]) => {
  //   value?.forEach((eachElement) => {
  //     if(!sql_condition) {
  //       sql_condition = `WHERE ${filtersKeys[key]} = '${eachElement}'`;
  //     } else {
  //       sql_condition += ` AND ${filtersKeys[key]} = '${eachElement}'`
  //     }
  //   })
  // }) 

  // const sql = `SELECT * FROM ${table_name} ${sql_condition}`;

  const result = await query(sql);
  res.status(200).json(new ApiResponse(200, "Success", {
    tours : result,
    total_page : 1
  }));
});


app.listen(8080, console.log("http://localhost:8080"));

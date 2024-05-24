const sendMail = async (type, info) => {
    const script = process.env.GMAIL_SCRIPT;

    //subrata.ash@gmail
    //appwalama@gmail.com
    // const toEmail = "subrata.ash@gmail.com";
    const toEmail = "ommdeb2011@gmail.com";
    // const toEmail = "appwalama@gmail.com";
  
    let url =
      script +
      `?toEmail=${toEmail}&subject=User want to travel&body=<h5>Query From travlio.in</h5><h4>Name : ${info.name}</h4><h4>Destination : ${info.destination}</h4><h4>Duration : ${info.duration}</h4><h4>Number : ${info.number}</h4><h4>Email : ${info.toEmail}</h4>`;
  
    if(type === "contact") {
        url = script + `?toEmail=${toEmail}&subject=User want to contact from&body=<h5>Query From travlio.in</h5><h4>Name : ${info.name}</h4><h4>Number : ${info.number}</h4><h4>Email : ${info.toEmail}</h4><h4>Message : ${info.message}</h4>`;
    }

    if(type === "book-tour") {
        url = script + `?toEmail=${toEmail}&subject=User want to book a tour from&body=<h5>Query From travlio.in</h5><h4>Name : ${info.name}</h4><h4>Number : ${info.toEmail}</h4><h4>Email : ${info.enquiry}`;
    }

    const response = await fetch(url, { method: "GET" });
    const result = await response.text();
  
    return result;
  };
  
  module.exports = {
    sendMail,
  };
  
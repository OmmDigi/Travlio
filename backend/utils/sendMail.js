const sendMail = async (type, info) => {
    const script = process.env.GMAIL_SCRIPT;

    //subrata.ash@gmail
  
    let url =
      script +
      `?toEmail=subrata.ash@gmail.com&subject=User want to travel&body=<h4>Name : ${info.name}</h4><h4>Destination : ${info.destination}</h4><h4>Duration : ${info.duration}</h4><h4>Number : ${info.number}</h4><h4>Email : ${info.toEmail}</h4>`;
  
    if(type === "contact") {
        url = script + `?toEmail=subrata.ash@gmail.com&subject=User want to contact&body=<h4>Name : ${info.name}</h4><h4>Number : ${info.number}</h4><h4>Email : ${info.toEmail}</h4><h4>Message : ${info.message}</h4>`;
    }

    if(type === "book-tour") {
        url = script + `?toEmail=subrata.ash@gmail.com&subject=User want to book a tour&body=<h4>Name : ${info.name}</h4><h4>Number : ${info.toEmail}</h4><h4>Email : ${info.enquiry}`;
    }

    const response = await fetch(url, { method: "GET" });
    const result = await response.text();
  
    return result;
  };
  
  module.exports = {
    sendMail,
  };
  
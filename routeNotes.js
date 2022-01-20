const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>enter message</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    // on is a listener event >>listening here for data
    req.on("data", (chunk) => {
      //chunk is th data being streamed from event... node will run on time after time until all data is received
      console.log(chunk);
      body.push(chunk);
    });
    //req on is again an event listenter... by using end node is adding an event listener for the end of th first enevt and then excuted the funtion ponce that is heard
    return req.on("end", () => {
      //once all chunks have been received they need to be buffered in order to work with them
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      //parsed body will display as 'message=body+of+message
      //to get rid of the message= use split to break string up into an array and grab the second part
      const message = parsedBody.split("=")[0];
      //Sync means synchronis and blocks code exicutiuon untill file is written
      //if not using write file Sync... need to use third argument, the action to use when done working with file
      fs.writeFile("message.txt", message, (err) => {
        res.writeHead(302, { Location: "/" });
        return res.end();
      });
      //everything that depends on the action of the event needs to be inside the event listener
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>hello</title></head>");
  res.write("<body><h1>hello from node</h1><form></body>");
  res.write("</html>");
  return res.end();
  // console.log(req.url, req.method, req.headers);
};
module.exports = requestHandler;

//exports is a global object exposed by node and looks fo rregisterd funcxrtions

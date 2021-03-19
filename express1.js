const http = require("http");
const { readFileSync } = require("fs");

const homePage = readFileSync("./index1.html");
const homeStyles = readFileSync("./style1.css");
const homeLogic = readFileSync("./app1.js");
const homeImage = readFileSync("./logo.svg");

const server = http.createServer((req, res) => {
  // console.log(req);
  // console.log(req.method);
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>About Us</h1>");
    res.end();
  } else if (url === "/style1.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyles);
    res.end();
  } else if (url === "/app1.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homeLogic);
    res.end();
  } else if (url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(homeImage);
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Page Not Found</h1>");
    res.end();
  }
});

server.listen(5000);

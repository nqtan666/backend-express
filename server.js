const http = require("http"); // setting nodejs da co

const host = "localhost"; // localhost
const port = 3000; // port ( tuy y)

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World!\n NQTan");
});

server.listen(port, host, () => {
  console.log("Web server running at http://%s:%s", host, port);
});

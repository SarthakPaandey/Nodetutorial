// const fs = require("fs");
// const path = require("path");

// const sourcePath = "/home/sarthak-pandey/Documents/my-node-app/file.txt";
// const destinationDir = "/home/sarthak-pandey/Documents/my-node-app/dir";

// const fileName = path.basename(sourcePath);
// const destinationPath = path.join(destinationDir, fileName);

// fs.copyFile(sourcePath, destinationPath, (err) => {
//   if (err) throw err;
//   console.log("File was copied successfully");
// });
// fs.unlinkSync(file.txt);

const http = require("http");
const fs = require("fs");

const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("index.html", (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "text/plain");
        res.end("Error loading index.html");
      } else {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end(data);
      }
    });
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("Not Found");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

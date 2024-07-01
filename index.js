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

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  if (req.url === "/login") {
    res.write("<html>");
    res.write("<head><title>Hello World</title></head>");
    res.write("<body><h1>Hello World</h1></body>");
    res.write("</html>");
  } else {
    res.write("<html>");
    res.write("<head><title>Hello Login</title></head>");
    res.write("<body><h1>Hello Login</h1></body>");
    res.write("</html>");
  }

  res.end();
});

// Listen on both ports
const port3000 = 3000;
const host3000 = "localhost";
server.listen(port3000, host3000, () => {
  console.log(`Server is running on http://${host3000}:${port3000}`);
});

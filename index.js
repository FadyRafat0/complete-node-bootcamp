/* 
    modules

    FILES
    fs -> file system
    Syncrhonous
    fs.readFileSync("path", "encoding") -> return the text from the file synchronous
    fs.writeFileSync("path", "text") -> overwrite in the file with text
    Asyncrhonous
    fs.readFile("path", "encoding", callbackfun(err, data))
    fs.writeFile("path", "text", "encoding", callbackfun(err))

    --------------------------------------------------------------------------------------------
    
*/

const fs = require("fs");

fs.readFile("./1-node-farm/starter/txt/start.txt", "utf-8", (err, data) => {
  fs.readFile(`./1-node-farm/starter/txt/${data}.txt`, "utf-8", (err, data) => {
    fs.readFile(
      `./1-node-farm/starter/txt/append.txt`,
      "utf-8",
      (err, data2) => {
        let combinedData = `${data}\n${data2}`;
        fs.writeFile("./my_txt", combinedData, "utf-8", (err) => {
          console.log("Done Writing");
        });
      }
    );
  });
});

console.log("Reading Files ...");

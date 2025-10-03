const fs = require("fs");
const { text } = require("stream/consumers");

const textIn = fs.readFileSync("./1-node-farm/starter/txt/input.txt", "utf-8");

console.log(textIn);

const textOut = `This Is What We Know About Avocado: ${textIn}\nCreated on ${new Date()}`;

// console.log(textOut);

fs.writeFileSync("./my_txt", textOut);
console.log("Output Done");

const fs = require("fs");
const [str, boom] = fs.readFileSync(0).toString().trim().split("\n");
let stack = [];
str.split("").map((s, i) => {
  stack.push(s);
  if (
    stack.length >= boom.length &&
    stack.slice(-boom.length).join("") === boom
  ) stack.splice(-boom.length);
});
console.log(stack.length ? stack.join("") : "FRULA");
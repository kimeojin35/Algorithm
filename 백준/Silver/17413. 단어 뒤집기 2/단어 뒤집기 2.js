const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
let answer = [];
let isOpenTag = false;
let str = [];
input.split("").map((t) => {
  if (t === "<") {
    isOpenTag = true;
    answer.push(str.reverse().join(""));
    str = [];
  } else if (t === " " && !isOpenTag) {
    answer.push([...str.reverse(), " "].join(""));
    str = [];
  }
  if (t === ">") {
    isOpenTag = false;
    answer.push(t);
  }
  if (isOpenTag) answer.push(t);
  else if (t !== ">" && t !== "<" && t !== " ") str.push(t);
});
answer.push(str.reverse().join(""));

console.log(answer.join(""));
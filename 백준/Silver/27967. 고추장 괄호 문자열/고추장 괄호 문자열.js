const fs = require('fs')
const [n, str] = fs.readFileSync(0).toString().trim().split("\n");

function isValid(s) {
  let stack = [];
  for (let char of s) {
    if (char === "(") {
      stack.push("(");
    } else if (char === ")") {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }
  return stack.length === 0;
}

function restoreBrackets(s, index = 0) {
  if (index === s.length) {
    if (isValid(s)) {
      console.log(s);
      process.exit(0);
    }
    return;
  }

  if (s[index] === "G") {
    restoreBrackets(
      s.substring(0, index) + "(" + s.substring(index + 1),
      index + 1
    );
    restoreBrackets(
      s.substring(0, index) + ")" + s.substring(index + 1),
      index + 1
    );
  } else {
    restoreBrackets(s, index + 1);
  }
}

restoreBrackets(str);
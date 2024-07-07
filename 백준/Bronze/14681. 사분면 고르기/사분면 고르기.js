const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputs = [];
rl.on("line", (line) => {
  inputs.push(parseInt(line));
  if (inputs.length === 2) {
    const [A, B] = inputs;
    let answer;
    if (A > 0 && B > 0) answer = 1;
    else if (A > 0 && B < 0) answer = 4;
    else if (A < 0 && B < 0) answer = 3;
    else answer = 2;
    console.log(answer);
    rl.close();
  }
});
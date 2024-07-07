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
    console.log(A + B);
    rl.close();
  }
});
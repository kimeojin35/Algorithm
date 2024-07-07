const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (input) => {
  const [A, B, C] = input.split(" ").map(BigInt);
  console.log((A + B + C).toString());
  rl.close();
});
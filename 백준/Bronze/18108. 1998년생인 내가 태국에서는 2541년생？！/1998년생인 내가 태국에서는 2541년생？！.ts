const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  console.log(input - 543)
  rl.close();
});

rl.on("close", () => {
  process.exit();
});
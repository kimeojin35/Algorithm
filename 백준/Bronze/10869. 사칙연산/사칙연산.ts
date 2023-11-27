const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const numbers = input.split(' ');
  const A = parseInt(numbers[0]);
  const B = parseInt(numbers[1]);
  console.log(A + B);
  console.log(A - B);
  console.log(A * B);
  console.log(Math.floor(A / B));
  console.log(A % B);
  rl.close();
});

rl.on("close", () => {
  process.exit();
});
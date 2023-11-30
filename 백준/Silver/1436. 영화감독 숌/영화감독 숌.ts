const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (N) => {
  N = parseInt(N);
  let count = 0;
  let num = 666;

  while (count < N) {
    if (String(num).includes("666")) {
      count++;
    }
    if (count < N) {
      num++;
    }
  }
  console.log(num);
  rl.close();
});
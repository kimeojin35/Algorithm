const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (input) => {
	input = parseInt(input);
	let answer = 0;
  if ((input % 4 == 0 && !(input % 100 == 0)) || input % 400 == 0) answer = 1
  console.log(answer);
  rl.close();
});
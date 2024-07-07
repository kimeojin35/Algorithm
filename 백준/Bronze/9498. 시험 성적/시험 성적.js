const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (input) => {
	input = parseInt(input);
	let answer;
  if (90 <= input) answer = "A"
  else if (80 <= input && input < 90) answer = "B"
  else if (70 <= input && input < 80) answer = "C"
  else if (60 <= input && input < 70) answer = "D"
  else answer = "F" 
  console.log(answer);
  rl.close();
});
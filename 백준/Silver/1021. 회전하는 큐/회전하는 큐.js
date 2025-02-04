const fs = require('fs')
const [num, sequence] = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = num.split(" ").map(Number);
const numbers = sequence.split(" ").map(Number);
const arr = new Array(n).fill(null).map((_, i) => i + 1);

let count = 0;

numbers.map((i) => {
  const index = arr.indexOf(i);
  for (let j = 0; j < arr.length; j++) {
    const item = arr[0];
    if (item == i) {
      arr.shift();
      break;
    } else if (index < arr.length / 2) {
      count++;
      arr.push(arr.shift());
    } else {
      count++;
      arr.unshift(arr.pop());
    }
  }
});

console.log(count);

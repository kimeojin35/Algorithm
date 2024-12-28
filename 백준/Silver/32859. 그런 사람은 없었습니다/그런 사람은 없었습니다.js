const fs = require('fs');
const [num, s, ...member] = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = num.split(" ").map(Number);
const sum = Number(s);
let memberArr = member.map((i) => i.split(" ").map(Number));

let okArr = [];
let arr = [];

memberArr.map(([i1, t1], index) => {
  if (t1 === 1 && !okArr.includes(i1)) {
    let isForgetSubmit = true;
    const newArr = memberArr.slice(index + 1).filter(([_, t]) => t === 0);
    if (newArr.length < sum) isForgetSubmit = false;
    newArr.map(([i2, t2], idx) => {
      if (idx <= sum - 1 && i2 === i1) isForgetSubmit = false;
    });
    if (isForgetSubmit) arr.push(i1);
  } else {
    okArr.push(i1);
  }
});

if (arr.length > 0) arr.sort((a, b) => a - b).map((i) => console.log(i));
else console.log(-1);
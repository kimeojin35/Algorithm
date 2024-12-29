const fs = require("fs")
const [n, ...arr] = fs.readFileSync(0).toString().trim().split("\n");

let count = [];

arr.map((i) => {
  const findObj = count.find((obj) => obj.title === i);
  if (findObj) findObj.sold += 1;
  else count.push({ title: i, sold: 1 });
});


count.sort((a, b) => {
  if (b.sold !== a.sold) return b.sold - a.sold;
  return a.title < b.title ? -1 : 1;
});

console.log(count[0].title);
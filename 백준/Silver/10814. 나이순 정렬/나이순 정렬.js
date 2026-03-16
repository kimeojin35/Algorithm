const fs = require('fs');
const [n, ...arr] = fs.readFileSync(0).toString().trim().split("\n");

const list = arr.map((item, idx) => {
  const [age, name] = item.split(" ");
  return [Number(age), name, idx];
});

list.sort(([age1, , idx1], [age2, , idx2]) => {
  if (age1 !== age2) return age1 - age2;
  return idx1 - idx2;
});

console.log(list.map(([age, name]) => `${age} ${name}`).join("\n"));
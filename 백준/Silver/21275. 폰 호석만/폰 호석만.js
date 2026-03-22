const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split(" ");
let arrA = Array.from(34).fill(0);
let arrB = Array.from(34).fill(0);
for (let i = 2; i <= 36; i++) {
  arrA[i - 2] =
    isNaN(parseInt(a, i)) || parseInt(a, i) > 1n << 63n ? null : parseInt(a, i);
  arrB[i - 2] =
    isNaN(parseInt(b, i)) || parseInt(b, i) > 1n << 63n ? null : parseInt(b, i);
}
const arr = [
  ...new Set(
    arrA.filter(
      (i, idx) =>
        i !== null && arrB.indexOf(i) !== idx && arrB.indexOf(i) !== -1,
    ),
  ),
];
if (arr.length > 1) console.log("Multiple");
else if (arr.length === 0) console.log("Impossible");
else {
  const nA = [];
  arrA.forEach((v, i) => {
    if (v === arr[0]) nA.push(i + 2);
  });
  const nB = [];
  arrB.forEach((v, i) => {
    if (v === arr[0]) nB.push(i + 2);
  });
  if (nA.length === 1 && nB.length === 1) console.log(arr[0], nA[0], nB[0]);
  else console.log("Multiple");
}
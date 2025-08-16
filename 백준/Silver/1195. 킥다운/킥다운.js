const fs = require("fs");
const [arr1, arr2] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .sort((a, b) => b.length - a.length)
  .map((i) => i.split("").map(Number));
let min = arr1.length + arr2.length;
for (let i = -arr1.length; i < arr1.length; i++) {
  let ok = true;
  for (let j = 0; j <= arr2.length; j++) {
    if (i + j < 0 || i + j >= arr1.length) continue;
    if (arr1[i + j] == 2 && arr2[j] == 2) {
      ok = false;
      break;
    }
  }
  if (ok) {
    const len = Math.max(arr1.length, i + arr2.length) - Math.min(0, i);
    min = Math.min(min, len);
  }
}

console.log(min);
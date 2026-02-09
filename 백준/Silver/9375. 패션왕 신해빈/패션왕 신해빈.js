const fs = require("fs");
const [_, ...arr] = fs.readFileSync(0).toString().trim().split("\n");
for (let i = 0; i < arr.length; i++) {
  const m = Number(arr[i]);
  const clothes = arr.slice(i + 1, i + 1 + m);
  const map = new Map();
  for (let j = 0; j < m; j++) {
    const [name, type] = clothes[j].split(" ");
    if (!map.has(type)) map.set(type, []);
    map.get(type).push(name);
  }
  let answer = 1;
  for (const [_, names] of map) {
    answer *= names.length + 1;
  }
  console.log(answer - 1);
  i += m;
}
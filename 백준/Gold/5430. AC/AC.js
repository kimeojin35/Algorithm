const fs = require('fs')
const [t, ...testcase] = fs.readFileSync(0).toString().trim().split("\n");

let answer = "";
for (let i = 0; i < Number(t) * 3; i += 3) {
  const [p, n, arr] = testcase.slice(i, i + 3);
  const a = JSON.parse(arr);
  let l = 0;
  let r = n;
  let isReverse = false;
  let isError = false;
  for (const j of p.split("")) {
    if (j == "R") isReverse = !isReverse;
    if (j == "D") {
      if (isReverse) r--;
      else l++;
    }
    if (r < l) {
      isError = true;
      break;
    }
  }
  const slice = a.slice(l, r);
  answer += (isError ? "error" : "[" + (isReverse ? slice.reverse() : slice).join(",") + "]") + "\n";
}
console.log(answer);
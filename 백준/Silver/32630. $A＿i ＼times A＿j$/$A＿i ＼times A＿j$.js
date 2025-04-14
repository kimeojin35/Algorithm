const fs = require('fs')
const [_, testcase] = fs.readFileSync(0).toString().trim().split("\n");
const arr = testcase.split(" ").map(Number);

let acc = 0n;
let mn = 1 << 30,
  smn = mn;
let mx = -(1 << 30),
  smx = mx;

for (const xRaw of arr) {
  const x = BigInt(xRaw);
  acc += x;

  if (x < smn) smn = x;
  if (smn < mn) [mn, smn] = [smn, mn];

  if (x > smx) smx = x;
  if (smx > mx) [mx, smx] = [smx, mx];
}

let res = acc;
if (res < acc - mn - smn + 2n * mn * smn) res = acc - mn - smn + 2n * mn * smn;
if (res < acc - mx - smx + 2n * mx * smx) res = acc - mx - smx + 2n * mx * smx;

console.log(res.toString());
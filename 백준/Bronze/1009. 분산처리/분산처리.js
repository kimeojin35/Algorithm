const fs = require('fs')
const [num, ...arr] = fs.readFileSync(0).toString().trim().split("\n");
const a = arr.map((i) => i.split(" ").map(Number));

const b = (n, m) => {
  let digit = new Array(4).fill(0).map((_, i) =>
    Number(
      Math.pow(n, i + 1)
        .toString()
        .slice(-1)
    )
  );
  return digit[(m - 1) % 4] == 0 ? 10 : digit[(m - 1) % 4];
};

a.map(([i, j]) => console.log(b(i, j)));

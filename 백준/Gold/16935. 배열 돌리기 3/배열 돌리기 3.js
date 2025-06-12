const fs = require('fs')
let [[n, m, r], ...testcase] = fs.readFileSync(0).toString().trim().split("\n").map((i) => i.split(" ").map(Number));
let arr = testcase.slice(0, n);
const [calc] = testcase.slice(n);
let answer = [];

const change = () => {
  const temp = n;
  n = m;
  m = temp;
};

calc.map((c) => {
  switch (c) {
    case 1: {
      let j = n - 1;
      for (let i = 0; i < Math.floor(n / 2); i++, j--) {
        answer[i] = arr[j];
        answer[j] = arr[i];
      }
      break;
    }
    case 2: {
      for (let i = 0; i < n; i++) answer[i] = arr[i].reverse();
      break;
    }
    case 3: {
      for (let i = 0; i < m; i++) {
        const row = [];
        for (let j = 0; j < n; j++) row.unshift(arr[j][i]);
        answer.push(row);
      }
      change();
      break;
    }
    case 4: {
      for (let i = 0; i < m; i++) {
        const row = [];
        for (let j = 0; j < n; j++) row.push(arr[j][i]);
        answer.unshift(row);
      }
      change();
      break;
    }
    case 5: {
      let start = 0;
      let end = Math.floor(m / 2);
      for (let h = 0; h < 2; h++) {
        for (let i = 0, j = Math.floor(n / 2); i < Math.floor(n / 2); i++, j++) answer.push([...arr[j].slice(start, end), ...arr[i].slice(start, end)]);
        start = end;
        end = m;
      }
      break;
    }
    case 6: {
      let start = Math.floor(m / 2);
      let end = m;
      for (let h = 0; h < 2; h++) {
        for (let i = 0, j = Math.floor(n / 2); i < Math.floor(n / 2); i++, j++) answer.push([...arr[i].slice(start, end), ...arr[j].slice(start, end)]);
        end = start;
        start = 0;
      }
      break;
    }
    default: break;
  }
  arr = answer.map((i) => [...i]);
  answer = [];
});
console.log(arr.map((i) => i.join(" ")).join("\n") + "\n");
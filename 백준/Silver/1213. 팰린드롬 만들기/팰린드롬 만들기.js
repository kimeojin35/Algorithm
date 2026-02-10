const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("");
const alphabet = {};
for (const t of input) alphabet[t] = (alphabet[t] || 0) + 1;
const last = Object.entries(alphabet).filter(([_, v]) => v % 2 === 1);
if (last.length > 1) console.log("I'm Sorry Hansoo");
else {
  let answer = "";
  const arr = Object.entries(alphabet).sort(
    ([a], [b]) => a.charCodeAt(0) - b.charCodeAt(0),
  );
  for (let i = 0; i < arr.length; i++) {
    const [t, c] = arr[i];
    answer += t.repeat(Math.floor(c / 2));
  }
  console.log(answer + (last.length === 1 ? last[0][0] : "") + answer.split("").reverse().join(""),);
}
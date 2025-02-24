const fs = require('fs')
const [num, ...testcase] = fs.readFileSync(0).toString().trim().split("\n").map((i) => i.split(" "));

const arr = testcase.map(([team, time]) => {
  const splitTime = time.split(":").map(Number);
  return { team: Number(team), time: splitTime[0] * 60 + splitTime[1] };
});

let team1 = 0;
let team2 = 0;
let score1 = 0;
let score2 = 0;

for (let i = 0; i < Number(num); i++) {
  const time = arr[i].time;
  let nextTime = 2880;
  if (i + 1 < Number(num)) nextTime = arr[i + 1].time;

  if (arr[i].team == 1) score1++;
  else score2++;
  if (score1 > score2) team1 += nextTime - time;

  if (score1 < score2) team2 += nextTime - time;
}

console.log(
  [Math.floor(team1 / 60), team1 % 60]
    .map((i) => i.toString().padStart(2, "0"))
    .join(":")
);
console.log(
  [Math.floor(team2 / 60), team2 % 60]
    .map((i) => i.toString().padStart(2, "0"))
    .join(":")
);

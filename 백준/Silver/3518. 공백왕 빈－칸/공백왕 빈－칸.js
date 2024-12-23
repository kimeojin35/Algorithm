const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");
let strArr = input.map((i) =>
  i
    .trim()
    .split(" ")
    .filter((j) => j !== "")
);

// 빈 칸에 null 넣기
const lengthArr = strArr.map((i) => i.length);
strArr.map((_, i) => {
  let arr = new Array(Math.max(...lengthArr)).fill(0);
  arr.map((_, j) => {
    if (!strArr[i][j]) strArr[i][j] = "";
  });
});

// 각 라인의 문자열 최대길이 구하기
const lengthDiffArr = [];
for (let i = 0; i < Math.max(...lengthArr); i++) {
  let maxStrLength = 0;
  for (let j = 0; j < strArr.length; j++) {
    if (strArr[j][i].length > maxStrLength) maxStrLength = strArr[j][i].length;
  }
  lengthDiffArr.push(maxStrLength);
}

// 문자열 배열 돌면서 공백 수 계산하고 추가
strArr.forEach((str, i) => {
  str.forEach((s, j) => {
    str[j] = s + " ".repeat(lengthDiffArr[j] - s.length);
  });
});

// 2차원 배열 돌면서 각 배열을 합쳐 문자열로 변환
strArr.map((i) => console.log(i.join(" ").trim()));

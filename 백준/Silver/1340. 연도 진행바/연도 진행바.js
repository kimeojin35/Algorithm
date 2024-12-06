const fs = require('fs');
const [month, day, year, time] = fs.readFileSync(0).toString().trim().replace(",", "").split(" ");
const [hour, minute] = time.split(":").map(Number);

const isLeapYear = () => {
  if (year % 4 == 0 && (year % 100 !== 0 || year % 400 === 0)) return true;
  else return false;
};

const monthArr = {
  January: 31,
  February: isLeapYear() ? 29 : 28,
  March: 31,
  April: 30,
  May: 31,
  June: 30,
  July: 31,
  August: 31,
  September: 30,
  October: 31,
  November: 30,
  December: 31,
};

const yearTime = (isLeapYear() ? 366 : 365) * 24 * 60;
let totalTime = Number(day - 1) * 24 * 60 + (hour * 60 + minute);

const keys = Object.keys(monthArr);
const monthIndex = keys.indexOf(month);

for (let i = 0; i < monthIndex; i++) {
  totalTime += monthArr[keys[i]] * 24 * 60;
}

const answer = (totalTime / yearTime) * 100;

console.log(
  answer.toString().includes(".") ? answer.toFixed(15) : answer + ".0"
);
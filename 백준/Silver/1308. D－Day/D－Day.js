const fs = require('fs')

const [day, dDay] = fs.readFileSync(0).toString().trim().split('\n');
let [dayY, dayM, dayD] = day.split(' ').map(Number);
let [dDayY, dDayM, dDayD] = dDay.split(' ');
const monthDayNum = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const isGgDate = new Date(dayY + 1000, dayM - 1, dayD);
const endDate = new Date(dDayY, dDayM - 1, dDayD);
let i = 0;

if (isGgDate <= endDate) {
	console.log('gg');
} else {
	let startDate = new Date(dayY, dayM - 1, dayD);
	while (endDate > startDate) {
		startDate = new Date(dayY, dayM - 1, dayD + i);
		i += 1;
	}
	console.log(`D-${i - 1}`);
}

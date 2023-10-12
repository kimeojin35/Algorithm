function solution(date1, date2) {
    let [year1, month1, day1] = date1;
    let [year2, month2, day2] = date2;
    return year1 < year2
        ? 1
        : year1 > year2
        ? 0
        : month1 < month2
        ? 1
        : month1 > month2
        ? 0
        : day1 < day2
        ? 1
        : day1 > day2
        ? 0
        : 0;
}
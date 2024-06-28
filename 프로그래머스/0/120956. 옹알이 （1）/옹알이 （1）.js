function solution(babbling) {
  var answer = 0;
  let can = ["aya", "ye", "woo", "ma"];

  for (let i in babbling) {
    let init = babbling[i];

    for (let j in can) {
      if (babbling[i].includes(can[j])) {
        init = init.replace(can[j], "X");
      }
    }

    init = init.replace(/X/gi, "");
    if (init.length === 0) {
      answer += 1;
    }
  }
  return answer;
}
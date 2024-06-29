function solution(number, limit, power) {
  let res = 0;

  for (let i = 1; i <= number; i++) {
    let cnt = 0;

    // 약수 개수 구하기
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        if (i / j === j) cnt += 1;
        else cnt += 2;
      }
      if (cnt > limit) {
        cnt = power;
        break;
      }
    }

    res += cnt;
  }

  return res;
}
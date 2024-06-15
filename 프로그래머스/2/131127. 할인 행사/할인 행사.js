function solution(want, number, discount) {
  let cnt = 0; // 선택할 수 있는 날 수
  // 현재까지 각 제품이 몇 번 할인되었는지 저장
  let cntArr = new Array(number.length).fill(0);

  // 배열을 직렬화하여 문자열이 동등한지 비교
  const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);

  for (let i = 0; i < discount.length; i++) {
    let thing = discount[i]; // 날짜별 할인 제품

    // 할인된 제품이 원하는 제품군에 해당하는 경우
    if (want.includes(thing)) {
      cntArr[want.indexOf(thing)]++;
    }

    // 10일째 되는 날인 경우
    if (i >= 9) {
      // 10일 전의 제품이 원하는 제품군에 포함되어 있다면
      // 해당 제품군의 수량을 1 감소
      if (want.includes(discount[i - 10]))
        cntArr[want.indexOf(discount[i - 10])]--;
      // 10일동안 원하는 제품들이 목표 수량만큼 할인되었다면
      if (equals(number, cntArr)) cnt++;
    }
  }

  return cnt;
}
function solution(numbers, hand) {
  let answer = "";
  const left = [1, 4, 7];
  const right = [3, 6, 9];
  const center = [2, 5, 8, 0];

  let leftHand = [3, 0];
  let rightHand = [3, 2];

  numbers.map((n) => {
    if (left.includes(n)) {
      answer += "L";
      leftHand = [left.indexOf(n), 0];
    } else if (right.includes(n)) {
      answer += "R";
      rightHand = [right.indexOf(n), 2];
    } else {
      const site = center.indexOf(n);
      const leftDiff = Math.abs(leftHand[0] - site) + Math.abs(leftHand[1] - 1);
      const rightDiff =
        Math.abs(rightHand[0] - site) + Math.abs(rightHand[1] - 1);
      if (leftDiff == rightDiff) {
        answer += hand[0].toUpperCase();
        if (hand == "left") leftHand = [site, 1];
        else rightHand = [site, 1];
      } else if (leftDiff > rightDiff) {
        answer += "R";
        rightHand = [site, 1];
      } else {
        answer += "L";
        leftHand = [site, 1];
      }
    }
  });
  return answer;
}
function solution(board, k) {
  var answer = 0;
  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[0].length; j += 1) {
      if (i + j <= k) {
        answer += board[i][j];
      }
    }
  }
  return answer;
}
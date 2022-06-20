function solution(board) {
  var answer = 0;

  for (let i = 0; i < board.length - 1; i++) {
    for (let j = 0; j < board[0].length - 1; j++) {
      if (!board[i][j] || !board[i][j + 1] || !board[i + 1][j] || !board[i + 1][j + 1]) continue;
      board[i + 1][j + 1] = Math.min(board[i][j], board[i][j + 1], board[i + 1][j]) + 1;
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) answer = Math.max(answer, board[i][j] ** 2);
  }

  return answer;
}

console.log(
  solution([
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 0, 1, 0],
  ])
);
console.log(
  solution([
    [0, 0, 0, 0],
    [0, 1, 1, 1],
    [0, 1, 0, 1],
    [0, 1, 1, 1],
  ])
);

function solution(rows, columns, queries) {
  var answer = [];
  const board = [...Array(rows)].map(_ => new Array(columns).fill(0));
  let num = 1;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      board[i][j] = num;
      num++;
    }
  }

  const rotate = (x1, y1, x2, y2) => {
    const check = [];
    const temp1 = board[x1 - 1][y2 - 1];
    const temp2 = board[x2 - 1][y2 - 1];
    const temp3 = board[x2 - 1][y1 - 1];
    const temp4 = board[x1 - 1][y1 - 1];
    for (let i = y2 - 1; i > y1 - 1; i--) {
      board[x1 - 1][i] = board[x1 - 1][i - 1];
      check.push(board[x1 - 1][i - 1]);
    }
    for (let i = x2 - 1; i > x1 - 1; i--) {
      board[i][y2 - 1] = board[i - 1][y2 - 1];
      check.push(board[i - 1][y2 - 1]);
    }
    for (let i = y1 - 1; i < y2 - 1; i++) {
      board[x2 - 1][i] = board[x2 - 1][i + 1];
      check.push(board[x2 - 1][i + 1]);
    }
    for (let i = x1 - 1; i < x2 - 1; i++) {
      board[i][y1 - 1] = board[i + 1][y1 - 1];
      check.push(board[i + 1][y1 - 1]);
    }
    board[x1][y2 - 1] = temp1;
    board[x2 - 1][y2 - 2] = temp2;
    board[x2 - 2][y1 - 1] = temp3;
    board[x1 - 1][y1] = temp4;

    return Math.min(temp1, temp2, temp3, temp4, ...check);
  };

  for (const q of queries) answer.push(rotate(...q));

  return answer;
}
console.log(
  solution(6, 6, [
    [2, 2, 5, 4],
    [3, 3, 6, 6],
    [5, 1, 6, 3],
  ])
);

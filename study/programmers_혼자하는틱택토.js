function solution(board) {
  const check = (x1, y1, x2, y2, x3, y3) => {
    if (board[x1][y1] === board[x2][y2] && board[x2][y2] === board[x3][y3] && board[x1][y1] !== '.') return true;
    return false;
  };

  let OCnt = 0;
  let XCnt = 0;
  let isOFinish = false;
  let isXFinish = false;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === 'O') OCnt += 1;
      else if (board[i][j] === 'X') XCnt += 1;
    }

    if (check(i, 0, i, 1, i, 2) || check(0, i, 1, i, 2, i)) {
      if (board[i][i] === 'O') isOFinish = true;
      else isXFinish = true;
    }
  }
  if (check(0, 0, 1, 1, 2, 2) || check(2, 0, 1, 1, 0, 2)) {
    if (board[1][1] === 'O') isOFinish = true;
    else isXFinish = true;
  }

  const diff = OCnt - XCnt;
  if (!(diff === 0 || diff === 1)) return 0;
  if (diff !== 1 && isOFinish) return 0;
  if (diff !== 0 && isXFinish) return 0;

  return 1;
}

console.log(solution(['O.X', '.O.', '..X']));
console.log(solution(['OOO', 'O..', 'XXX']));

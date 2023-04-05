function solution(board, aloc, bloc) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  function dfs(board, movePlayer, waitPlayer) {
    const res = [];

    const [x, y] = movePlayer;
    if (!board[x][y]) return [false, 0];
    board[x][y] = 0;

    let isDontMove = true;
    for (let k = 0; k < 4; k++) {
      const nextX = x + dx[k];
      const nextY = y + dy[k];
      if (nextX < 0 || nextX >= board.length || nextY < 0 || nextY >= board[0].length) continue;
      if (!board[nextX][nextY]) continue;

      isDontMove = false;
      res.push(dfs(board, waitPlayer, [nextX, nextY]));
    }
    board[x][y] = 1;

    if (isDontMove) return [false, 0];

    let canWin = false;
    let max = 0;
    let min = Infinity;
    for (let r of res) {
      const [isOpponentWin, cnt] = r;
      if (!isOpponentWin) canWin = true;

      if (!isOpponentWin) min = Math.min(min, cnt);
      else max = Math.max(max, cnt);
    }

    return canWin ? [true, min + 1] : [false, max + 1];
  }

  const [_, cnt] = dfs(board, aloc, bloc);
  return cnt;
}

console.log(
  solution(
    [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ],
    [1, 0],
    [1, 2]
  )
);
console.log(
  solution(
    [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ],
    [1, 0],
    [1, 2]
  )
);

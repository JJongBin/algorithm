function solution(board) {
  const len = board.length;
  const dx = [0, 1, 0, -1];
  const dy = [-1, 0, 1, 0];
  const costs = [...Array(len)].map(_ => [...Array(len)].map(_ => new Array(4).fill(Infinity)));
  costs[0][0][0] = 0;
  costs[0][0][1] = 0;
  costs[0][0][2] = 0;
  costs[0][0][3] = 0;

  const dfs = (x, y, cost, dist) => {
    for (let k = 0; k < 4; k++) {
      const xx = x + dx[k];
      const yy = y + dy[k];
      const calcCost = dist === -1 || dist === k ? cost + 100 : cost + 600;
      if (xx >= 0 && xx < len && yy >= 0 && yy < len) {
        if (costs[xx][yy][k] <= calcCost) continue;
        if (board[xx][yy]) continue;
        costs[xx][yy][k] = calcCost;
        dfs(xx, yy, calcCost, k);
      }
    }
  };
  dfs(0, 0, 0, -1);

  return Math.min(...costs[len - 1][len - 1]);
}
console.log(
  solution([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ])
);
console.log(
  solution([
    [0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 1],
    [0, 0, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0],
  ])
);

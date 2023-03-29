function solution(board) {
  var answer = 0;

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  const n = board.length;
  const m = board[0].length;

  let start = [0, 0];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === 'R') start = [i, j];
    }
  }

  const check = [...Array(n)].map(_ => new Array(m).fill(0));
  const bfs = (x, y) => {
    const queue = [[x, y]];
    check[x][y] = 1;
    let cnt = 1;

    while (queue.length) {
      const len = queue.length;
      for (let i = 0; i < len; i++) {
        const [x, y] = queue.shift();
        for (let k = 0; k < 4; k++) {
          let xx = x;
          let yy = y;
          while (true) {
            const tempX = xx + dx[k];
            const tempY = yy + dy[k];
            if (tempX < 0 || tempX >= n || tempY < 0 || tempY >= m) break;
            if (board[tempX][tempY] === 'D') break;
            xx = tempX;
            yy = tempY;
          }

          if (board[xx][yy] === 'G') return cnt;
          if (check[xx][yy]) continue;

          check[xx][yy] = 1;
          queue.push([xx, yy]);
        }
      }
      cnt += 1;
    }
  };

  answer = bfs(...start);

  return answer ? answer : -1;
}

console.log(solution(['...D..R', '.D.G...', '....D.D', 'D....D.', '..D....']));

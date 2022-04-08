const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/15683.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input.map(item => item.split(' ').map(Number));

const [n, m] = input.shift();
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
const direction = {
  1: [[0], [1], [2], [3]],
  2: [
    [0, 2],
    [1, 3],
  ],
  3: [
    [0, 1],
    [1, 2],
    [2, 3],
    [0, 3],
  ],
  4: [
    [0, 1, 2],
    [0, 1, 3],
    [1, 2, 3],
    [0, 2, 3],
  ],
  5: [[0, 1, 2, 3]],
};

const cctvs = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (1 <= input[i][j] && 5 >= input[i][j]) cctvs.push([i, j]);
  }
}

let answer = Infinity;
const dfs = (arr, idx) => {
  if (idx === cctvs.length) {
    let blind = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (!arr[i][j]) blind++;
      }
    }
    answer = Math.min(answer, blind);
    return;
  }

  const [x, y] = cctvs[idx];
  for (const mode of direction[input[x][y]]) {
    const board = [];
    for (let i = 0; i < n; i++) board.push([...arr[i]]);

    for (const d of mode) {
      let xx = x;
      let yy = y;
      while (true) {
        xx += dx[d];
        yy += dy[d];
        if (!(xx >= 0 && xx < n && yy >= 0 && yy < m) || board[xx][yy] === 6) break;
        if (!board[xx][yy]) board[xx][yy] = '#';
      }
    }
    dfs(board, idx + 1);
  }
};
dfs(input, 0);
console.log(answer);

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/1743.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input.map(str => str.split(' ').map(Number));
const [n, m, k] = input.shift();

const check = [...Array(n)].map(_ => new Array(m).fill(0));
const board = [...Array(n)].map(_ => new Array(m).fill('.'));
for (const [x, y] of input) board[x - 1][y - 1] = '#';

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const bfs = (posX, posY) => {
  const queue = [[posX, posY]];
  check[posX][posY] = 1;
  let cnt = 1;

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let k = 0; k < 4; k++) {
      const xx = x + dx[k];
      const yy = y + dy[k];

      if (xx < 0 || xx >= n || yy < 0 || yy >= m) continue;
      if (board[xx][yy] !== '#') continue;
      if (check[xx][yy]) continue;
      queue.push([xx, yy]);
      check[xx][yy] = 1;
      cnt++;
    }
  }
  return cnt;
};

let answer = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (board[i][j] === '#' && !check[i][j]) answer = Math.max(answer, bfs(i, j));
  }
}
console.log(answer);

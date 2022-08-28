const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/4179.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input.shift().split(' ').map(Number);
input = input.map(str => str.split(''));
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const bfs = (jihoonX, jihoonY, fireQueue) => {
  const jihoonQueue = [[jihoonX, jihoonY]];
  const jihoonCheck = [...Array(n)].map(_ => new Array(m).fill(0));
  const fireCheck = [...Array(n)].map(_ => new Array(m).fill(0));

  jihoonCheck[jihoonX][jihoonY] = 1;
  for (const [x, y] of fireQueue) fireCheck[x][y] = 1;

  let cnt = 1;
  while (jihoonQueue.length) {
    const jihoonLen = jihoonQueue.length;
    const fireLen = fireQueue.length;

    for (let i = 0; i < fireLen; i++) {
      const [x, y] = fireQueue.shift();
      for (let k = 0; k < 4; k++) {
        const xx = x + dx[k];
        const yy = y + dy[k];
        if (xx < 0 || xx >= n || yy < 0 || yy >= m) continue;
        if (fireCheck[xx][yy]) continue;
        if (input[xx][yy] === '.') {
          fireCheck[xx][yy] = 1;
          fireQueue.push([xx, yy]);
        }
      }
    }

    for (let i = 0; i < jihoonLen; i++) {
      const [x, y] = jihoonQueue.shift();
      for (let k = 0; k < 4; k++) {
        const xx = x + dx[k];
        const yy = y + dy[k];
        if (xx < 0 || xx >= n || yy < 0 || yy >= m) return cnt;
        if (jihoonCheck[xx][yy]) continue;
        if (fireCheck[xx][yy]) continue;
        if (input[xx][yy] === '.') {
          jihoonCheck[xx][yy] = 1;
          jihoonQueue.push([xx, yy]);
        }
      }
    }
    cnt += 1;
  }
  return 'IMPOSSIBLE';
};

let jihoon = [0, 0];
let fire = [];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (input[i][j] === 'J') jihoon = [i, j];
    if (input[i][j] === 'F') fire.push([i, j]);
  }
}

console.log(bfs(...jihoon, fire));

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/2589.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let answer = 0;
const [n, m] = input[0].split(' ').map(Number);
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const bfs = pos => {
  const check = [...Array(n)].map(_ => new Array(m).fill(0));
  const queue = [pos];
  check[pos[0]][pos[1]] = 1;
  let dist = -1;

  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const [x, y] = queue.shift();
      for (let k = 0; k < 4; k++) {
        const xx = x + dx[k];
        const yy = y + dy[k];
        if (xx >= 0 && xx < n && yy >= 0 && yy < m) {
          if (input[xx + 1][yy] === 'L' && !check[xx][yy]) {
            queue.push([xx, yy]);
            check[xx][yy] = 1;
          }
        }
      }
    }
    dist++;
  }
  return dist;
};

for (let i = 1; i < n + 1; i++) {
  for (let j = 0; j < m; j++) {
    if (input[i][j] === 'L') answer = Math.max(answer, bfs([i - 1, j]));
  }
}

console.log(answer);

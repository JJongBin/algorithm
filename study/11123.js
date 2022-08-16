const fs = require('fs');
const { format } = require('path');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './testcase/11123.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

let t = +input.shift();
let idx = 0;
while (t > 0) {
  t -= 1;
  const [n, m] = input[idx].split(' ').map(Number);
  idx += 1;
  const check = [...Array(n)].map(_ => new Array(m).fill(0));
  let answer = 0;
  for (let i = idx; i < idx + n; i++) {
    for (let j = 0; j < m; j++) {
      if (check[i - idx][j]) continue;
      if (input[i][j] === '.') continue;
      const queue = [[i, j]];
      check[i - idx][j] = 1;
      while (queue.length) {
        const [x, y] = queue.shift();
        for (let k = 0; k < 4; k++) {
          const xx = x + dx[k];
          const yy = y + dy[k];
          if (xx < idx || xx >= idx + n || yy < 0 || yy >= m) continue;
          if (check[xx - idx][yy]) continue;
          if (input[xx][yy] === '.') continue;
          check[xx - idx][yy] = 1;
          queue.push([xx, yy]);
        }
      }
      answer += 1;
    }
  }
  console.log(answer);
  idx += n;
}

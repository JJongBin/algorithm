const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/18405.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input.map(item => item.split(' ').map(Number));

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const [n, k] = input.shift();
const [s, x, y] = input.pop();
const virus = [...Array(k + 1)].map(_ => new Array());

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (input[i][j]) virus[input[i][j]].push([i, j]);
  }
}

for (let t = 0; t < s; t++) {
  for (let v = 1; v < k + 1; v++) {
    const len = virus[v].length;
    if (!len) continue;
    for (let i = 0; i < len; i++) {
      const [x, y] = virus[v].shift();
      for (let dir = 0; dir < 4; dir++) {
        const xx = x + dx[dir];
        const yy = y + dy[dir];
        if (xx < 0 || xx >= n || yy < 0 || yy >= n) continue;
        if (input[xx][yy]) continue;
        input[xx][yy] = v;
        virus[v].push([xx, yy]);
      }
    }
  }
}

console.log(input[x - 1][y - 1]);

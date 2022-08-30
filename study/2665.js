const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/2665.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input.shift();
input = input.map(str => str.split('').map(Number));
const check = [...Array(n)].map(_ => new Array(n).fill(n + 1));
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const queue = [[0, 0, 0]];
check[0][0] = 1;

while (queue.length) {
  const [x, y, d] = queue.shift();
  for (let k = 0; k < 4; k++) {
    const xx = x + dx[k];
    const yy = y + dy[k];
    if (xx < 0 || xx >= n || yy < 0 || yy >= n) continue;
    if (check[xx][yy] <= d) continue;

    if (input[xx][yy]) {
      queue.push([xx, yy, d]);
      check[xx][yy] = d;
    } else {
      queue.push([xx, yy, d + 1]);
      check[xx][yy] = d + 1;
    }
  }
}
console.log(check[n - 1][n - 1]);

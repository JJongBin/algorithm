const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/2468.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input.shift();
input = input.map(item => item.split(' ').map(item2 => +item2));

let answer = 1;
let rain, check;

const rainMax = input.reduce((prev, curr) => {
  return Math.max(...curr, prev);
}, 0);

const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

const dfs = (i, j, rain) => {
  const stack = [];
  stack.push([i, j]);

  while (stack.length) {
    const [x, y] = stack.pop();
    for (let k = 0; k < 4; k++) {
      const xx = x + dx[k];
      const yy = y + dy[k];
      if (xx >= 0 && xx < n && yy >= 0 && yy < n) {
        if (check[xx][yy] === 0 && input[xx][yy] > rain) {
          check[xx][yy] = 1;
          stack.push([xx, yy]);
        }
      }
    }
  }
};

for (rain = 0; rain < rainMax; rain++) {
  let cnt = 0;

  check = new Array(n);
  for (let i = 0; i < n; i++) check[i] = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (check[i][j] === 0 && input[i][j] > rain) {
        check[i][j] = 1;
        dfs(i, j, rain);
        cnt++;
      }
    }
  }

  answer = Math.max(answer, cnt);
}

console.log(answer);

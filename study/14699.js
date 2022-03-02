const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/14699.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input.map(item => item.split(' ').map(Number));

const [n, m] = input[0];
const height = input[1].map((n, i) => [n, i]);

const dp = new Array(n).fill(1);
const link = [...Array(n + 1)].map(e => []);

for (let i = 2; i < 2 + m; i++) {
  const [x, y] = input[i];
  if (height[x - 1][0] > height[y - 1][0]) link[x].push(y);
  else link[y].push(x);
}

height.sort((a, b) => b[0] - a[0]);

for (let i = 0; i < height.length; i++) {
  const x = height[i][1] + 1;
  const len = link[x] ? link[x].length : 0;

  for (let j = 0; j < len; j++) {
    const y = link[x][j];
    dp[y - 1] = Math.max(dp[x - 1] + 1, dp[y - 1]);
  }
}
console.log(dp.join('\n'));

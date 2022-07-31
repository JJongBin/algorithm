const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/1937.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input.map(item => item.split(' ').map(Number));
const n = input.shift()[0];

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
const dp = [...Array(n)].map(_ => new Array(n).fill(1));

const dfs = (x, y) => {
  if (dp[x][y] !== 1) return dp[x][y];

  for (let k = 0; k < 4; k++) {
    const xx = x + dx[k];
    const yy = y + dy[k];
    if (xx < 0 || xx >= n || yy < 0 || yy >= n) continue;
    if (input[x][y] >= input[xx][yy]) continue;
    dp[x][y] = Math.max(dp[x][y], dfs(xx, yy) + 1);
  }
  return dp[x][y];
};

let answer = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    const dist = dfs(i, j, 1);
    answer = Math.max(answer, dist);
  }
}

console.log(answer);

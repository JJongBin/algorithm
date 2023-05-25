const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/2225.txt';

const inputs = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, k] = inputs[0].split(' ').map(Number);

const dp = [...Array(k + 1)].map(_ => new Array(n + 1).fill(0));
for (let i = 0; i <= n; i++) dp[1][i] = 1;

for (let i = 2; i <= k; i++) {
  for (let j = 0; j <= n; j++) {
    for (let jj = 0; jj <= n; jj++) {
      if (j + jj > n) continue;
      dp[i][j + jj] = (dp[i][j + jj] + dp[i - 1][j]) % 1000000000;
    }
  }
}
console.log(dp[k][n]);

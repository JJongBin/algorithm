const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/2133.txt';

const n = +fs.readFileSync(filePath).toString().trim().split('\n')[0];
const dp = new Array(n < 4 ? 5 : n + 1).fill(0);

dp[0] = 1;
dp[2] = 3;
dp[4] = 11;

for (let i = 6; i < n + 1; i += 2) {
  dp[i] = 3 * dp[i - 2];
  for (let j = 0; j < i - 2; j += 2) dp[i] += 2 * dp[j];
}
console.log(dp[n]);

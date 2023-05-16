const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/5557.txt';

const inputs = fs.readFileSync(filePath).toString().trim().split('\n');
const n = +inputs.shift() - 1;
const nums = inputs.shift().split(' ').map(Number);
const target = nums.pop();

const dp = [...Array(n)].map(_ => new Array(21).fill(0n));
dp[0][nums[0]] = 1n;

for (let i = 1; i < n; i++) {
  for (let num = 0; num <= 20; num++) {
    if (!dp[i - 1][num]) continue;

    if (num + nums[i] <= 20) dp[i][num + nums[i]] += dp[i - 1][num];
    if (num - nums[i] >= 0) dp[i][num - nums[i]] += dp[i - 1][num];
  }
}

console.log(dp[n - 1][target].toString());

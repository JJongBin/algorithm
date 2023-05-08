const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/2294.txt';

let inputs = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, k] = inputs.shift().split(' ').map(Number);

const dp = new Array(k + 1).fill(Infinity);
dp[0] = 0;
const nums = inputs.map(Number);

for (i = 1; i <= k; i++) {
  for (const num of nums) {
    if (i - num >= 0) dp[i] = Math.min(dp[i], dp[i - num] + 1);
  }
}

console.log(dp[k] === Infinity ? -1 : dp[k]);

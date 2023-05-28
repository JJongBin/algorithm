const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/11057.txt';

let input = fs.readFileSync(filePath).toString().trim();

const n = +input;
const dp = new Array(11).fill(1);
dp[0] = 0;
for (let i = 1; i < n; i++) {
  for (let j = 1; j <= 10; j++) {
    dp[j] = (dp[j] + dp[j - 1]) % 10007;
  }
}
const answer = dp.reduce((a, b) => a + b, 0);
console.log(answer % 10007);

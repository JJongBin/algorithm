const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/14501.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input.map(item => item.split(' ').map(item2 => +item2));
const n = input[0][0];

const dp = new Array(n + 1).fill(0);
let answer = 0;
for (let i = 0; i < n; i++) {
  if (input[i + 1][0] + i <= n) {
    if (dp[i] === 0 || dp[i] < answer) dp[i] = answer;
    dp[i + input[i + 1][0]] = Math.max(dp[i] + input[i + 1][1], dp[i + input[i + 1][0]]);
  }
  answer = Math.max(dp[i], answer);
}

console.log(Math.max(answer, dp[dp.length - 1]));

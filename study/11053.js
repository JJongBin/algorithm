const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'testcase/11053.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

n = +input.shift();
input = input[0].split(' ').map(Number);

const dp = new Array(n).fill(1);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (input[i] > input[j]) dp[i] = Math.max(dp[j] + 1, dp[i]);
  }
}
console.log(Math.max(...dp));

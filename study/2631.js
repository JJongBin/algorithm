const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/2631.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const nums = input.map(Number);
const n = +input[0];

const dp = new Array(n + 1).fill(1);

for (let i = 1; i < n + 1; i++) {
  for (let j = 1; j < i; j++) {
    if (nums[i] > nums[j]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}

console.log(n - Math.max(...dp));

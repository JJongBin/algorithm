const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'testcase/14002.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

n = +input[0];
input.shift();
input = input[0].split(' ').map(item => +item);

let dp = new Array(n).fill(1);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (input[i] > input[j]) dp[i] = Math.max(dp[j] + 1, dp[i]);
  }
}

let maxNum = Math.max(...dp);
const arr = [];

for (let i = n - 1; i >= 0; i--) {
  if (maxNum === dp[i]) {
    arr.push(input[i]);
    maxNum--;
  }
}

console.log(arr.length);
console.log(arr.reverse().join(' '));

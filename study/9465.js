const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/9465.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

for (let i = 1; i < input.length; i++) {
  const n = +input[i];
  const arr = [];
  arr[0] = input[++i].split(' ').map(item => +item);
  arr[1] = input[++i].split(' ').map(item => +item);

  const dp = [[0, arr[0][0], arr[1][0]]];

  // 여기부터 시작
  for (let k = 1; k < n; k++) {
    dp[k] = [
      Math.max(...dp[k - 1]),
      Math.max(dp[k - 1][2], dp[k - 1][0]) + arr[0][k],
      Math.max(dp[k - 1][1], dp[k - 1][0]) + arr[1][k],
    ];
  }
  console.log(Math.max(...dp[n - 1]));
}

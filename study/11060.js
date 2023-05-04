const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/11060.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const arr = input[1].split(' ').map(Number);

const dp = new Array(N + 1).fill(Infinity);
dp[1] = 0;

for (let pos = 1; pos <= N; pos++) {
  for (let dist = 1; dist <= arr[pos - 1]; dist++) {
    if (pos + dist > N) break;
    dp[pos + dist] = Math.min(dp[pos + dist], dp[pos] + 1);
  }
}

console.log(dp[N] !== Infinity ? dp[N] : -1);

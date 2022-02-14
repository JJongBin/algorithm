const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./testcase/2193.txt";

let n = fs.readFileSync(filePath).toString().trim();

const dp = new Array(91).fill(1);
dp[0] = 0n;
dp[1] = 1n;
dp[2] = 2n;

for (let i = 3; i < +n + 1; i++) {
  dp[i] = dp[i - 1] + dp[i - 2] + 1n;
}

console.log((dp[n] - dp[n - 1]).toString());

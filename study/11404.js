const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./testcase/11404.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = input.map((item) => item.split(" ").map((item2) => +item2));

const n = input[0][0];
const m = input[1][0];

const dp = Array.from(Array(n), () => Array(n).fill(Infinity));

for (let i = 0; i < n; i++) dp[i][i] = 0;
for (let i = 2; i < input.length; i++) {
  dp[input[i][0] - 1][input[i][1] - 1] = Math.min(
    input[i][2],
    dp[input[i][0] - 1][input[i][1] - 1]
  );
}

for (let k = 0; k < n; k++) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (dp[i][j] > dp[i][k] + dp[k][j]) dp[i][j] = dp[i][k] + dp[k][j];
    }
  }
}
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (dp[i][j] === Infinity) dp[i][j] = 0;
  }
}
for (const a of dp) {
  console.log(...a);
}

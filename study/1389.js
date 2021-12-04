const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./testcase/1389.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map((item) => item.split(" ").map((item2) => +item2));
const n = input[0][0];
const m = input[0][1];

const dp = new Array(n);
for (let i = 0; i < n; i++) {
  dp[i] = new Array(n).fill(Infinity);
}
for (let i = 1; i < input.length; i++) {
  dp[input[i][0] - 1][input[i][1] - 1] = 1;
  dp[input[i][1] - 1][input[i][0] - 1] = 1;
}

for (let k = 0; k < n; k++) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (dp[i][j] > dp[i][k] + dp[k][j]) dp[i][j] = dp[i][k] + dp[k][j];
    }
  }
}

let answer = [Number.MAX_SAFE_INTEGER, 0];
for (let i = 0; i < n; i++) {
  let temp = 0;
  for (let j = 0; j < n; j++) {
    if (i !== j) temp += dp[i][j];
  }
  answer = answer[0] > temp ? (answer = [temp, i]) : answer;
}
console.log(answer[1] + 1);

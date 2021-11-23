const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./testcase/18353.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input.shift());
input = input[0].split(" ").map((item) => +item);

// console.log(n);
// console.log(input);

const dp = new Array(n).fill(0);
let maxNum = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (input[i] < input[j] && dp[i] < dp[j]) {
      dp[i] = dp[j];
    }
  }
  dp[i]++;
  if (dp[i] > maxNum) {
    maxNum = dp[i];
  }
}
console.log(n - maxNum);

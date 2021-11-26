const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./testcase/14430.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = input.map((item) => item.split(" ").map((item2) => +item2));
const n = input[0][0];
const m = input.shift()[1];

// console.log(n, m);
// console.log(input);
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (i !== 0 && j !== 0) {
      input[i][j] += Math.max(input[i - 1][j], input[i][j - 1]);
    } else if (i !== 0 && j === 0) {
      input[i][j] += input[i - 1][j];
    } else if (i === 0 && j !== 0) {
      input[i][j] += input[i][j - 1];
    }
  }
}
console.log(input[n - 1][m - 1]);

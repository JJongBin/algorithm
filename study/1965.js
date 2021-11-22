const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./testcase/1965.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input.shift());
input = input[0].split(" ").map((item) => +item);

const check = new Array(n).fill(0);

let maxNum = 0;
for (let i = 0; i < n; i++) {
  // check[i] = 1;
  for (let j = 0; j < i; j++) {
    if (input[i] > input[j] && check[i] < check[j]) {
      check[i] = check[j];
    }
  }
  check[i]++;
  if (maxNum < check[i]) maxNum = check[i];
}
// console.log(check);
console.log(maxNum);

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./testcase/2531.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, d, k, c] = input[0].split(" ").map((item) => +item);
const arr = [...input.slice(1), ...input.slice(1, k)].map((item) => +item);
const check = new Array(d + 1).fill(0);

let answer = 0;
let temp = 1;
let right = 0;
check[arr[0]] = 1;

for (let left = 0; left < n; left++) {
  if (left !== 0) {
    check[arr[left - 1]]--;
    if (check[arr[left - 1]] === 0) temp--;
  }
  while (right - left < k - 1) {
    right++;
    check[arr[right]]++;
    if (check[arr[right]] === 1) {
      temp++;
    }
    if (right - left === k - 1 && check[c] === 0) {
      answer = Math.max(answer, temp + 1);
    } else {
      answer = Math.max(answer, temp);
    }
  }
}
console.log(answer);

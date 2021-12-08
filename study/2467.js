const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./testcase/2467.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
// console.log(n);
input = input[0]
  .split(" ")
  .map((item) => +item)
  .sort((a, b) => a - b);

// console.log(input);

let left = 0;
let right = input.length - 1;

let compare = [Number.MAX_SAFE_INTEGER, []];
while (left < right) {
  const temp = input[left] + input[right];
  if (compare[0] >= Math.abs(temp)) {
    compare[0] = Math.abs(temp);
    compare[1] = [input[left], input[right]];
  }
  if (temp < 0) left++;
  else if (temp > 0) right--;
  else if (temp === 0) {
    compare[1] = [input[left], input[right]];
    break;
  }
}
console.log(compare[1].join(" "));

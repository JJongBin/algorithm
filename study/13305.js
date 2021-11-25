const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./testcase/13305.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input.shift());
const dist = input
  .shift()
  .split(" ")
  .map((item) => BigInt(item));
const cost = input
  .shift()
  .split(" ")
  .map((item) => BigInt(item));

let answer = 0;
let max = cost[0];
let temp = BigInt(0);
for (let i = 1; i < n; i++) {
  temp += dist[i - 1];
  if (cost[i] <= max) {
    answer = BigInt(answer) + max * temp;
    max = cost[i];
    temp = BigInt(0);
  }
  if (i === cost.length - 1) {
    answer = BigInt(answer) + max * temp;
  }
}

console.log(String(answer));

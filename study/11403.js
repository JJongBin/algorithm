const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./testcase/11403.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map((item) => item.split(" ").map((item2) => +item2));
const n = input.shift()[0];

for (let k = 0; k < n; k++) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (input[i][k] === 1 && input[k][j] === 1) input[i][j] = 1;
    }
  }
}
input.map((item) => console.log(...item));

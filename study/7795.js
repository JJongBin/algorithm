const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./testcase/7795.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");
const arr = input
  .slice(1)
  .map((item) => item.split(" ").map((item2) => +item2));

for (let i = 0; i < arr.length; i++) {
  let answer = 0;
  const [n, m] = arr[i];
  const a = arr[++i].sort((a, b) => a - b);
  const b = arr[++i].sort((a, b) => a - b);

  let bb = 0;
  for (let aa = 0; aa < n; aa++) {
    while (a[aa] > b[bb + 1] && bb < m - 1) {
      bb++;
      if (bb === m - 1) break;
    }
    if (a[aa] > b[bb]) {
      answer += bb + 1;
    }
  }
  console.log(answer);
}

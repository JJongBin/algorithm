const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/6236.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

// console.log(input);
const n = +input[0].split(' ')[0];
const m = +input[0].split(' ')[1];

const arr = input.slice(1).map(item => +item);
let minM = 1;
let maxM = arr.reduce((a, b) => a + b);

let answer = Infinity;
// console.log(arr)

while (minM <= maxM) {
  const mid = Math.floor((minM + maxM) / 2);
  let cnt = 1;
  let temp = mid;
  let check = false;
  for (const money of arr) {
    if (money > mid) {
      check = true;
      break;
    }
    if (temp - money < 0) {
      temp = mid;
      cnt++;
    }
    temp -= money;
  }
  if (check) {
    minM = mid + 1;
    continue;
  }
  if (cnt <= m) {
    maxM = mid - 1;
    answer = mid;
  } else {
    minM = mid + 1;
  }
}
console.log(answer);

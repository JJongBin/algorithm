const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/16401.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [m, n] = input[0].split(' ').map(item => +item);
const snacks = input[1].split(' ').map(item => +item);

let minL = 1;
let maxL = Number.MAX_SAFE_INTEGER;

let answer = 0;
while (minL <= maxL) {
  let mid = parseInt((minL + maxL) / 2);
  let cnt = snacks.reduce((cnt, len) => cnt + Math.floor(len / mid), 0);
  if (cnt < m) {
    maxL = mid - 1;
  } else {
    minL = mid + 1;
    answer = mid;
  }
}
console.log(answer);

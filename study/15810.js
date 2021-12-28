const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/15810.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(item => +item);
const arr = input[1].split(' ').map(item => +item);

let minN = 1;
let maxN = Number.MAX_SAFE_INTEGER;
let answer = 0;

while (minN <= maxN) {
  let mid = parseInt((maxN + minN) / 2);
  let cnt = 0;
  for (const s of arr) {
    cnt += Math.floor(mid / s);
    if (cnt >= m) {
      maxN = mid - 1;
      break;
    }
  }
  if (cnt < m) {
    minN = mid + 1;
    answer = minN;
  }
}
console.log(answer);

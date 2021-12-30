const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/17245.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input.map(item => item.split(' ').map(item2 => +item2));

let answer = 0;
const n = +input[0];

let low = 0;
let high = Number.MAX_SAFE_INTEGER;

let computers = 0;
for (let i = 1; i < n + 1; i++) {
  for (let j = 0; j < n; j++) {
    computers += input[i][j];
  }
}
const target = Math.ceil(computers / 2);

while (low <= high) {
  const mid = Math.floor((low + high) / 2);

  let cnt = 0;
  for (let i = 1; i < n + 1; i++) {
    for (let j = 0; j < n; j++) {
      cnt += input[i][j] > mid ? mid : input[i][j];
    }
  }

  if (target <= cnt) {
    high = mid - 1;
    answer = mid;
  } else {
    low = mid + 1;
  }
}
console.log(answer);

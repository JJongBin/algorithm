const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/1920.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');
const n = +input.shift();
const arr = input
  .shift()
  .split(' ')
  .map(item => +item)
  .sort((a, b) => a - b);

const m = +input.shift();
const findArr = input
  .shift()
  .split(' ')
  .map(item => +item);

const answer = [];

for (let i = 0; i < m; i++) {
  let left = 0;
  let right = n - 1;
  const target = findArr[i];

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] > target) right = mid - 1;
    else if (arr[mid] < target) left = mid + 1;
    else {
      answer.push(1);
      break;
    }
  }
  if (answer.length !== i + 1) answer.push(0);
}
console.log(answer.join('\n'));

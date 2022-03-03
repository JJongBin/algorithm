const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/1254.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const str = input[0];
const len = str.length;
let answer = 0;

for (let i = 0; i < len; i++) {
  let left = i;
  let right = len - 1;

  while (left < right) {
    if (str[left] !== str[right]) break;
    left++;
    right--;
  }

  if (left >= right) {
    answer = i * 2 + len - i;
    break;
  }
}

console.log(answer);

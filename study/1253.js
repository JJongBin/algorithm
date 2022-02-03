const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './testcase/1253.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input.shift();
input = input[0]
  .split(' ')
  .map(item => +item)
  .sort((a, b) => b - a);

let result = 0;
for (let i = 0; i < n; i++) {
  let left = 0;
  let right = n - 1;

  while (left < right) {
    if (left === i) left++;
    else if (right === i) right--;
    else {
      const compare = input[left] + input[right];
      if (compare < input[i]) right--;
      else if (compare > input[i]) left++;
      else {
        result++;
        break;
      }
    }
  }
}

console.log(result);

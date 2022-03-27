const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './testcase/2470.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input.shift();
input = input[0]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

let left = 0;
let right = n - 1;
let answer = [Infinity, left, right];

while (left < right) {
  const sum = input[left] + input[right];
  const compare = Math.abs(sum);
  answer = answer[0] > compare ? [compare, left, right] : answer;

  if (sum < 0) left++;
  else if (sum > 0) right--;
  else break;
}
console.log(input[answer[1]], input[answer[2]]);

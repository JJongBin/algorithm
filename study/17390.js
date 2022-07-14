const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/17390.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input.map(item => item.split(' ').map(Number));

const [n, q] = input[0];
const nums = input[1].sort((a, b) => a - b);

const calcNums = [0];
for (let i = 0; i < n; i++) calcNums.push(calcNums[i] + nums[i]);

const answer = [];
for (let i = 2; i < input.length; i++) {
  const [l, r] = input[i];
  answer.push(calcNums[r] - calcNums[l - 1]);
}

console.log(answer.join('\n'));

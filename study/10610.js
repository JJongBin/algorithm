const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/10610.txt';

let input = fs.readFileSync(filePath).toString().trim();

const nums = input
  .split('')
  .map(Number)
  .sort((a, b) => b - a);

const sum = nums.reduce((a, b) => a + b, 0);
if (sum % 3 !== 0 || nums[nums.length - 1] !== 0) console.log(-1);
else console.log(nums.join(''));

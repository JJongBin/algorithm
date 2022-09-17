const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/25305.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, k] = input.shift().split(' ').map(Number);
const scores = input
  .shift()
  .split(' ')
  .map(Number)
  .sort((a, b) => b - a);

console.log(scores[k - 1]);

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/10610.txt';

let input = fs.readFileSync(filePath).toString().trim();

console.log(
  input
    .split('')
    .map(Number)
    .sort((a, b) => b - a)
    .join('')
);

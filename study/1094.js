const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/1094.txt';

let input = +fs.readFileSync(filePath).toString().trim();

console.log(
  input
    .toString(2)
    .split('')
    .reduce((prev, curr) => +prev + +curr, 0)
);

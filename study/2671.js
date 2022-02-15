const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './testcase/2671.txt';

let input = fs.readFileSync(filePath).toString().trim();

console.log(
  input
    .split('')
    .reverse()
    .join('')
    .replace(/1+0+01/g, '')
    .replace(/10/g, '')
    ? 'NOISE'
    : 'SUBMARINE'
);

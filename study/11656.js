const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/11656.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n')[0];

const arr = [];
let str = '';
for (let i = input.length - 1; i >= 0; i--) {
  str = input[i] + str;
  arr.push(str);
}

console.log(arr.sort().join('\n'));

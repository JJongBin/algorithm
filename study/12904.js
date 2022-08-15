const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/12904.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const str = input.shift();
let changeStr = input.shift();
let answer = 0;
while (str.length < changeStr.length) {
  const idx = changeStr.length - 1;
  if (changeStr[idx] === 'A') changeStr = changeStr.substring(0, idx);
  else if (changeStr[idx] === 'B') {
    changeStr = changeStr.substring(0, idx);
    changeStr = changeStr.split('').reverse().join('');
  }
  if (str === changeStr) answer = 1;
}
console.log(answer);

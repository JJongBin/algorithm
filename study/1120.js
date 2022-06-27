const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/1120.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n')[0].split(' ');

const strLen1 = input[0].length;
const strLen2 = input[1].length;
let diff = Infinity;
for (let i = 0; i < strLen2 - strLen1 + 1; i++) {
  let cnt = 0;
  for (let j = 0; j < strLen1; j++) if (input[0][j] !== input[1][i + j]) cnt++;
  diff = Math.min(diff, cnt);
}

console.log(diff);

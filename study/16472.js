const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/16472.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input[0];
const str = input[1];

const hash = new Map();

let right = 0;
let answer = 0;

for (let left = 0; left < str.length; left++) {
  hash.set(str[left], (hash.get(str[left]) || 0) + 1);

  while (hash.size > n) {
    hash.set(str[right], hash.get(str[right]) - 1);
    if (hash.get(str[right]) === 0) hash.delete(str[right]);
    right++;
  }
  answer = Math.max(answer, left - right + 1);
}
console.log(answer);

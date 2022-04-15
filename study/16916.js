const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/16916.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let answer = 0;
const [s, p] = input;
const sLen = s.length;
const pLen = p.length;
const check = new Array(sLen).fill(0);

let j = 0;
for (let i = 1; i < sLen; i++) {
  while (j > 0 && s[i] !== s[j]) j = check[j - 1];
  if (s[j] === s[i]) {
    check[i] = j + 1;
    j++;
  } else j = 0;
}

j = 0;
for (let i = 0; i < sLen; i++) {
  while (j > 0 && s[i] !== p[j]) j = check[j - 1];
  if (s[i] === p[j]) {
    if (j === pLen - 1) {
      answer = 1;
      break;
    } else j++;
  }
}
console.log(answer);

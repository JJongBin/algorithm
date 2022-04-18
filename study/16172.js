const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/16172.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let answer = 0;
let [s, k] = input;
s = s.replace(/\d/g, '');

const sLen = s.length;
const kLen = k.length;
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
  while (j > 0 && s[i] !== k[j]) j = check[j - 1];
  if (s[i] === k[j]) {
    if (j === kLen - 1) {
      answer = 1;
      break;
    } else j++;
  }
}
console.log(answer);

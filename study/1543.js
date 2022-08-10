const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/1543.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [str1, str2] = input;
let idx = 0;
let answer = 0;
const len = str2.length;

while (idx < str1.length) {
  const check = str1.slice(idx).indexOf(str2);
  if (check >= 0) {
    answer += 1;
    idx += check + len;
  } else break;
}
console.log(answer);

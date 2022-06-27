const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/17423.txt';

let str = fs.readFileSync(filePath).toString().trim().split('\n')[0];
let answer = '';

let tagCheck = false;
let temp = [];
for (const s of str) {
  if (s === '<') {
    if (temp.length) {
      answer += temp.reverse().join('');
      temp = [];
    }
    tagCheck = true;
    answer += s;
  } else if (s === '>') {
    tagCheck = false;
    answer += s;
  } else {
    if (tagCheck) answer += s;
    else {
      if (s === ' ') {
        answer += temp.reverse().join('') + ' ';
        temp = [];
      } else temp.push(s);
    }
  }
}
if (temp.length) answer += temp.reverse().join('');

console.log(answer);

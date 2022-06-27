const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './testcase/1244.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input.map(item => item.split(' ').map(Number));
const n = input[0];
const switchArr = input[1];
const len = input.length;
for (let i = 3; i < len; i++) {
  const num = input[i][1];
  if (input[i][0] === 1) for (let j = num; j <= n; j += num) switchArr[j - 1] = switchArr[j - 1] ? 0 : 1;
  else {
    let left = num;
    let right = num;
    while (switchArr[left - 1] === switchArr[right - 1]) {
      switchArr[left - 1] = switchArr[left - 1] ? 0 : 1;
      switchArr[right - 1] = switchArr[right - 1] ? 0 : 1;
      left--;
      right++;

      if (left < 1 || right > n) break;
    }
  }
}

let temp = [];
for (const s of switchArr) {
  temp.push(s);
  if (temp.length >= 20) {
    console.log(temp.join(' '));
    temp = [];
  }
}
if (temp.length) console.log(temp.join(' '));

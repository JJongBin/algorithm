const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/9375.txt';

let inputs = fs.readFileSync(filePath).toString().trim().split('\n');
inputs.shift();

const solution = hash => {
  let totalCnt = 1;
  const arr = Object.values(hash);
  for (const typeCnt of arr) totalCnt *= typeCnt + 1;
  return totalCnt - 1;
};

let hash = {};
let cnt = 0;
for (const input of inputs) {
  if (!cnt) {
    cnt = +input;
    hash = {};
    if (!cnt) console.log(0);
  } else {
    const [name, type] = input.split(' ');
    hash[type] = hash[type] ? hash[type] + 1 : 1;
    cnt -= 1;

    if (!cnt) {
      const res = solution(hash);
      console.log(res);
    }
  }
}

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/2661.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input[0];
let answer = '';
let flag = true;

const dfs = arr => {
  if (arr.length === n) {
    flag = false;
    answer = arr.join('');
    return;
  }

  outer: for (let i = 1; i < 4; i++) {
    arr.push(i);
    const len = arr.length;
    for (let i = len - 1; i >= Math.floor(len / 2); i--) {
      const compare1 = arr.slice(i).join('');
      const compare2 = arr.slice(i * 2 - len, i).join('');
      if (compare1 === compare2) {
        arr.pop();
        continue outer;
      }
    }
    if (flag) dfs(arr);
    arr.pop();
  }
};

dfs([1]);
console.log(answer);

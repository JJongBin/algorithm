const exp = require('constants');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/7490.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n');

const t = +input.shift();
const answer = [];

const bfs = num => {
  const queue = ['1'];
  const express = ['1'];
  let now = 2;

  while (queue.length) {
    if (now > num) break;

    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const exp = queue.shift();
      const exp2 = express.shift();
      for (const flag of ['', '+', '-']) {
        queue.push(exp + flag + now);
        express.push(exp2 + (flag ? flag : ' ') + now);
      }
    }
    now++;
  }

  for (let i = 0; i < queue.length; i++) {
    if (eval(queue[i]) === 0) answer.push(express[i]);
  }
};

for (const num of input) {
  bfs(num);
  answer.push('');
}

answer.pop();
console.log(answer.join('\n'));

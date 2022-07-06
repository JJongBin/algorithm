const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/17952.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input.map(item => item.split(' ').map(Number));

const stack = [];
let score = 0;
let nowWork = [0, 0];
for (let i = 1; i < input.length; i++) {
  if (input[i][0]) {
    stack.push(nowWork);
    nowWork = [input[i][1], input[i][2] - 1];
  } else nowWork[1] -= 1;

  if (nowWork[1] > 0) continue;

  score += nowWork[0];
  if (stack.length) nowWork = stack.pop();
  else nowWork = [0, 0];
}
console.log(score);

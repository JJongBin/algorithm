const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/2304.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input.map(item => item.split(' ').map(Number));
const n = input.shift();

const stack1 = [];
const stack2 = [];

input.sort((a, b) => a[0] - b[0]);

let answer = 0;
for (let i = 0; i < input.length; i++) {
  if (!stack1.length) stack1.push(input[i]);
  else {
    if (stack1[stack1.length - 1][1] >= input[i][1]) continue;

    const prevLine = stack1.pop();
    answer += prevLine[1] * (input[i][0] - prevLine[0]);
    stack1.push(input[i]);
  }
}

for (let i = input.length - 1; i >= 0; i--) {
  if (!stack2.length) stack2.push(input[i]);
  else {
    if (stack2[stack2.length - 1][1] > input[i][1]) continue;

    const prevLine = stack2.pop();
    answer += prevLine[1] * (prevLine[0] - input[i][0]);
    stack2.push(input[i]);
  }
}

console.log(answer + stack1[0][1] * 1);

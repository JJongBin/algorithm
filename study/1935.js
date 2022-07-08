const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/1935.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input.shift();
const calc = input.shift();
const hash = new Map();
const stack = [];

for (const c of calc) {
  if (c.match(/[a-zA-Z]/)) {
    if (!hash.has(c)) hash.set(c, input.shift());
    stack.push(hash.get(c));
  } else {
    const num2 = stack.pop();
    const num1 = stack.pop();
    stack.push(eval(num1 + c + num2));
  }
}
console.log(stack.pop().toFixed(2));

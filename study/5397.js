const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/5397.txt';

let inputs = fs.readFileSync(filePath).toString().trim().split('\n');

inputs.shift();

for (const input of inputs) {
  const stack1 = [];
  const stack2 = [];

  for (const str of input) {
    if (str === '-') {
      if (stack1.length) stack1.pop();
    } else if (str === '<') {
      if (stack1.length) stack2.push(stack1.pop());
    } else if (str === '>') {
      if (stack2.length) stack1.push(stack2.pop());
    } else stack1.push(str);
  }

  console.log(stack1.join('') + stack2.reverse().join(''));
}

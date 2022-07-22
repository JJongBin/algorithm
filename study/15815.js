const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/15815.txt';

let input = fs.readFileSync(filePath).toString().trim();

const stack = [];
for (const n of input) {
  if (n.match(/[0-9]/)) stack.push(n);
  else {
    const a = stack.pop();
    const b = stack.pop();
    stack.push(eval(b + n + a));
  }
}
console.log(stack.pop());

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/2504.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const str = input[0];
const stack = [];

let answer = 0;
let i = 0;
let num = 1;

const solve = () => {
  while (i < str.length) {
    if (str[i] === '(' || str[i] === '[') {
      stack.push(str[i]);
      num = 1;
    } else {
      const s = stack.pop();
      if (str[i] === ')' && s === '(') stack.push(num * 2);
      else if (str[i] === ']' && s === '[') stack.push(num * 3);
      else if (+s) {
        num = +s;
        while (stack[stack.length - 1] !== '(' && stack[stack.length - 1] !== '[') {
          if (!stack.length) break;
          num += stack.pop();
        }
        continue;
      } else return 0;
    }
    i++;
  }
  for (let k = 0; k < stack.length; k++) {
    if (+stack[k]) answer += stack[k];
    else return 0;
  }

  return answer;
};
console.log(solve());

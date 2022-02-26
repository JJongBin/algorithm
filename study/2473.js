const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/2473.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input.shift();
const solution = input[0]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

let check = Infinity;
let answer = [];

outer: for (let i = 0; i < n; i++) {
  let left = i === 0 ? 1 : 0;
  let right = i === n - 1 ? n - 2 : n - 1;

  while (left < right) {
    const now = solution[i] + solution[left] + solution[right];

    if (check > Math.abs(now)) {
      check = Math.abs(now);
      answer = [solution[i], solution[left], solution[right]];
    }

    if (now > 0) right = right - 1 === i ? right - 2 : right - 1;
    else if (now < 0) left = left + 1 === i ? left + 2 : left + 1;
    else if (now === 0) {
      answer = [solution[i], solution[left], solution[right]];
      break outer;
    }
  }
}

console.log(answer.sort((a, b) => a - b).join(' '));

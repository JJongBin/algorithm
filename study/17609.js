const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './testcase/17609.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const t = +input.shift();
const answer = [];

const check = (word, left, right) => {
  while (left <= right) {
    if (word[left] === word[right]) {
      left++;
      right--;
    } else return [left, right];
  }
  return [left, right];
};

for (let i = 0; i < t; i++) {
  const word = input[i];
  const [left, right] = check(word, 0, word.length - 1);

  if (left > right) answer.push(0);
  else {
    const [left2, right2] = check(word, left + 1, right);
    const [left3, right3] = check(word, left, right - 1);
    if (left2 > right2 || left3 > right3) answer.push(1);
    else answer.push(2);
  }
}
console.log(answer.join('\n'));

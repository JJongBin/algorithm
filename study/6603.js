const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/6603.txt';

const inputs = fs.readFileSync(filePath).toString().trim().split('\n');

const answers = [];
for (const input of inputs) {
  if (input === '0') break;

  const nums = input.split(' ').map(Number);
  nums.shift();
  nums.sort((a, b) => a - b);
  const answer = [];

  const len = nums.length;
  const select = [];
  const search = idx => {
    if (select.length >= 6) {
      answer.push(select.join(' '));
      return;
    }

    for (let i = idx; i < len; i++) {
      select.push(nums[i]);
      search(i + 1);
      select.pop();
    }
  };

  search(0);
  answers.push(answer.join('\n'));
}
console.log(answers.join('\n\n'));

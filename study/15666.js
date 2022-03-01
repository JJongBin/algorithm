const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/15666.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');
const [n, m] = input.shift().split(' ').map(Number);
let nums = input[0]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

const result = [];
const temp = [];

const dfs = (L, idx) => {
  if (L === m) {
    result.push(temp.join(' '));
    return;
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (!temp.length || temp[temp.length - 1] <= nums[i]) {
        temp.push(nums[i]);
        dfs(L + 1, idx + 1);
        temp.pop();
      }
    }
  }
};
dfs(0, 0);

console.log([...new Set(result)].join('\n'));

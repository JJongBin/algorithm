const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/10942.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input.map(item => item.split(' ').map(Number));

const n = input[0][0];
const nums = input[1];

const check = [...Array(n)].map(e => new Array(n).fill(0));

for (let i = 0; i < n; i++) check[i][i] = 1;
for (let i = 0; i < n - 1; i++) {
  if (nums[i] === nums[i + 1]) check[i][i + 1] = 1;
}

for (let i = n - 3; i >= 0; i--) {
  for (let j = i + 2; j < n; j++) {
    if (nums[i] === nums[j]) check[i][j] = check[i + 1][j - 1];
  }
}

const answer = [];
for (let i = 3; i < input.length; i++) {
  const [x, y] = input[i];
  answer.push(check[x - 1][y - 1]);
}

console.log(answer.join('\n'));

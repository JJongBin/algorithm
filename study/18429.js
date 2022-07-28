const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/18429.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, k] = input.shift().split(' ').map(Number);
const machine = input.shift().split(' ').map(Number);

const check = new Array(n).fill(0);

let answer = 0;
const select = (idx, power) => {
  if (idx >= n) answer++;
  for (let i = 0; i < n; i++) {
    if (check[i]) continue;
    if (power - k + machine[i] < 0) continue;
    check[i] = 1;
    select(idx + 1, power - k + machine[i]);
    check[i] = 0;
  }
};

select(0, 0);
console.log(answer);

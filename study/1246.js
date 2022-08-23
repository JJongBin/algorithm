const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/1246.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input.shift().split(' ').map(Number);
input = input.map(Number);
input.sort((a, b) => a - b);

let res = 0;
let target = 0;
for (let i = 0; i < m; i++) {
  let egg = Math.min(m - i, n);

  if (res < input[i] * egg) {
    res = input[i] * egg;
    target = input[i];
  }
}
console.log(target, res);

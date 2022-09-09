const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/1915.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input.shift().split(' ').map(Number);
input = input.map(item => item.split('').map(Number));

let size = 0;

for (let i = 0; i < n - 1; i++) {
  for (let j = 0; j < m - 1; j++) {
    if (!input[i][j] || !input[i][j + 1] || !input[i + 1][j] || !input[i + 1][j + 1]) continue;
    input[i + 1][j + 1] = Math.min(input[i][j], input[i][j + 1], input[i + 1][j]) + 1;
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) size = Math.max(size, input[i][j] ** 2);
}

console.log(size);

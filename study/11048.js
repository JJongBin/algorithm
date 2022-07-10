const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/11048.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input.map(item => item.split(' ').map(Number));

const [n, m] = input.shift();
for (let i = 1; i < n; i++) input[i][0] += input[i - 1][0];
for (let i = 1; i < m; i++) input[0][i] += input[0][i - 1];

for (let i = 1; i < n; i++) {
  for (let j = 1; j < m; j++) input[i][j] += Math.max(input[i - 1][j], input[i][j - 1], input[i - 1][j - 1]);
}

console.log(input[n - 1][m - 1]);

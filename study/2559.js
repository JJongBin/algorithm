const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/2559.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input.map(item => item.split(' ').map(Number));

const [n, k] = input[0];
const temp = [0, ...input[1]];

for (let i = 1; i < n + 1; i++) temp[i] += temp[i - 1];

const answer = [];
for (let i = n; i >= k; i--) answer.push(temp[i] - temp[i - k]);

console.log(Math.max(...answer));

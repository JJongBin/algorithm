const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/1269.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input.map(item => item.split(' ').map(Number));

const [a, b] = input[0];
const hash = new Set();
for (let i = 0; i < input[1].length; i++) hash.add(input[1][i]);

let cnt = 0;
for (let i = 0; i < input[2].length; i++) if (hash.has(input[2][i])) cnt++;

console.log(a + b - cnt * 2);

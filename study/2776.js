const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/2776.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input.map(item => item.split(' ').map(Number));

const n = input[0];

const result = [];
for (let k = 1; k < input.length; k += 4) {
  const hash = new Map();
  for (let i = 0; i < input[k]; i++) hash.set(input[k + 1][i], 1);
  for (let i = 0; i < input[k + 2]; i++) result.push(hash.get(input[k + 3][i]) ? 1 : 0);
}
console.log(result.join('\n'));

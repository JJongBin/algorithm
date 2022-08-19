const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/1758.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const n = input.shift();
input = input.map(Number).sort((a, b) => b - a);

let answer = 0;
for (let i = 0; i < input.length; i++) {
  const tip = input[i] - i;
  answer += tip < 0 ? 0 : tip;
}
console.log(answer);

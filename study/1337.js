const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/1337.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.shift();
input = input.map(Number).sort((a, b) => a - b);

let answer = 4;
for (let i = 0; i < input.length; i++) {
  const arr = input.filter(n => input[i] <= n && input[i] + 5 > n);
  answer = Math.min(answer, 5 - arr.length);
}

console.log(answer);

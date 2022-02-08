const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/2118.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const n = input[0];

const total = input.reduce((prev, curr) => prev + curr, 0) - n;

let from = 1;

let dist = 0;
let answer = 0;

for (let to = 1; to < input.length; to++) {
  dist += input[to];
  while (dist > total - dist) {
    dist -= input[from];
    from++;
  }
  answer = Math.max(answer, dist);
}
console.log(answer);

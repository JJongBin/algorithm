const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/1302.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const hash = new Map();
for (let i = 1; i < +input[0] + 1; i++) {
  hash.set(input[i], (hash.get(input[i]) || 0) + 1);
}
let answer = [0, ''];
for (const [book, n] of [...hash]) {
  if (answer[0] < n) answer = [n, book];
  if (answer[0] === n) answer = [n, [book, answer[1]].sort()[0]];
}
console.log(answer[1]);

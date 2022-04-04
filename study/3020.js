const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/3020.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input.map(item => item.split(' ').map(Number));
const [n, h] = input[0];

const bottom = new Array(h + 1).fill(0);
const top = new Array(h + 1).fill(0);

for (let i = 1; i < n + 1; i++) i % 2 === 1 ? (bottom[input[i]] += 1) : (top[h - input[i] + 1] += 1);

for (let i = 1; i < h + 1; i++) top[i] += top[i - 1];
for (let i = h; i >= 2; i--) bottom[i - 1] += bottom[i];

let cnt = 0;
let min = Infinity;
for (let i = 1; i < h + 1; i++) {
  const stoneCnt = top[i] + bottom[i];
  if (min > stoneCnt) {
    min = stoneCnt;
    cnt = 1;
  } else if (min === stoneCnt) cnt++;
}
console.log(`${min} ${cnt}`);

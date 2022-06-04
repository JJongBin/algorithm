const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/2564.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const pos = [];
input = input.map(item => item.split(' ').map(Number));

const [n, m] = input.shift();
const cnt = input.shift()[0];

for (const store of input) {
  if (store[0] === 1) pos.push(store[1]);
  else if (store[0] === 2) pos.push(n - store[1] + n + m);
  if (store[0] === 3) pos.push(n + m + n + m - store[1]);
  if (store[0] === 4) pos.push(n + store[1]);
}

const total = n + m + n + m;
const dg = pos.pop();

for (let i = 0; i < cnt; i++) {
  const len = Math.abs(dg - pos[i]);
  pos[i] = Math.min(len, total - len);
}

const answer = pos.reduce((a, b) => a + b, 0);
console.log(answer);

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/14425.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);

const hash = new Set();
for (let i = 1; i <= n; i++) hash.add(input[i]);

let cnt = 0;
for (let i = n + 1; i <= n + m; i++) {
  if (hash.has(input[i])) cnt++;
}

console.log(cnt);

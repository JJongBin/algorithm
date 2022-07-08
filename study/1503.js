const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/1503.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input.map(item => item.split(' ').map(Number));

const [n, s] = input.shift();
const check = new Array(1002).fill(0);
if (input.length) {
  const nums = input.shift();
  for (const n of nums) check[n] = 1;
}

let answer = Infinity;
for (let i = 1; i <= 1001; i++) {
  if (check[i]) continue;
  for (let j = i; j <= 1001; j++) {
    if (check[j]) continue;
    for (let k = j; k <= 1001; k++) {
      if (check[k]) continue;
      answer = Math.min(answer, Math.abs(n - i * j * k));
    }
  }
}
console.log(answer);

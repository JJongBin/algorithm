const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/1351.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, p, q] = input[0].split(' ').map(Number);

const hash = new Map();
hash.set(0, 1);

const cal = i => {
  if (hash.get(i)) return hash.get(i);
  const a1 = cal(Math.floor(i / q));
  const a2 = cal(Math.floor(i / p));
  hash.set(i, a1 + a2);

  return a1 + a2;
};

console.log(cal(n));

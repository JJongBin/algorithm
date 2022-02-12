const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './testcase/1072.txt';

let input = fs.readFileSync(filePath).toString().trim().split(' ');

const x = BigInt(+input[0]);
const y = BigInt(+input[1]);
const z = BigInt((y * 100n) / x);

let minG = 1n;
let maxG = BigInt(Number.MAX_SAFE_INTEGER);

let answer = 0n;
while (minG <= maxG) {
  const mid = BigInt((minG + maxG) / 2n);
  const newZ = BigInt(((y + mid) * 100n) / (x + mid));
  if (newZ - z >= 1n) {
    maxG = mid - 1n;
    answer = mid;
  } else {
    minG = mid + 1n;
  }
}
console.log(99 <= z ? -1 : String(answer));

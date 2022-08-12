const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/3036.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');
const nums = input[1].split(' ').map(Number);
let base = nums.shift();

for (const num of nums) {
  const temp = gcd(base, num);
  console.log(`${base / temp}/${num / temp}`);
}
function gcd(a, b) {
  while (a % b !== 0) {
    let r = a % b;
    if (r !== 0) {
      a = b;
      b = r;
    }
  }
  return b;
}

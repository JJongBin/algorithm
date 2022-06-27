const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/1475.txt';

let n = fs.readFileSync(filePath).toString().trim().split('\n')[0];

const nums = new Array(10).fill(0);

let len = n.length;
let cnt = 0;
for (const num of n) nums[num]++;

while (len > 0) {
  cnt++;
  for (let i = 0; i < 10; i++) {
    if (i === 6 && nums[9]) {
      nums[9]--;
      len--;
      continue;
    }
    if (i === 9 && nums[6]) {
      nums[6]--;
      len--;
      continue;
    }
    if (!nums[i]) continue;
    nums[i]--;
    len--;
  }
}

console.log(cnt);

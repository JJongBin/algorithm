const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/1138.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input.map(item => item.split(' ').map(Number));

const n = input[0][0];
const check = new Array(n).fill(0);

for (let i = 0; i < n; i++) {
  let num = 0;
  for (let j = 0; j < n; j++) {
    if (!check[j] && num >= input[1][i]) {
      check[j] = i + 1;
      break;
    } else if (!check[j]) num++;
  }
}
console.log(check.join(' '));

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/11726.txt';

let n = +fs.readFileSync(filePath).toString().trim().split('\n')[0];

const check = new Array(n + 1).fill(0);

check[1] = 1;
check[2] = 2;

for (let i = 3; i < n + 1; i++) check[i] = (check[i - 1] + check[i - 2]) % 10007;

console.log(check[n]);

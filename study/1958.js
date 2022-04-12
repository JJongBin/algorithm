const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/1958.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const str1 = input[0];
const str2 = input[1];
const str3 = input[2];

const len1 = str1.length;
const len2 = str2.length;
const len3 = str3.length;

const dy = [...Array(len1 + 1)].map(_ => [...Array(len2 + 1)].map(_ => new Array(len3 + 1).fill(0)));

for (let i = 1; i < len1 + 1; i++) {
  for (let j = 1; j < len2 + 1; j++) {
    for (let k = 1; k < len3 + 1; k++) {
      if (str1[i - 1] === str2[j - 1] && str2[j - 1] === str3[k - 1]) dy[i][j][k] = dy[i - 1][j - 1][k - 1] + 1;
      else dy[i][j][k] = Math.max(dy[i - 1][j][k], dy[i][j - 1][k], dy[i][j][k - 1]);
    }
  }
}
console.log(dy[len1][len2][len3]);

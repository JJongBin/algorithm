const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/5582.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const str1 = input[0];
const str2 = input[1];

const len1 = str1.length;
const len2 = str2.length;

let answer = 0;
const dp = [...Array(len1 + 1)].map(e => new Array(len2 + 1).fill(0));

for (let i = 0; i < len1; i++) {
  for (let j = 0; j < len2; j++) {
    if (str1[i] === str2[j]) {
      dp[i + 1][j + 1] = dp[i][j] + 1;
      answer = Math.max(answer, dp[i + 1][j + 1]);
    }
  }
}
console.log(answer);

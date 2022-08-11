const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/1388.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');
const [n, m] = input.shift().split(' ').map(Number);

let answer = 0;
for (let i = 0; i < n; i++) {
  let cnt = 0;
  for (let j = 0; j < m; j++) {
    if (input[i][j] === '|' && cnt) {
      answer++;
      cnt = 0;
    } else if (input[i][j] === '-') cnt++;
  }
  if (cnt) answer++;
}

for (let i = 0; i < m; i++) {
  let cnt = 0;
  for (let j = 0; j < n; j++) {
    if (input[j][i] === '-' && cnt) {
      answer++;
      cnt = 0;
    } else if (input[j][i] === '|') cnt++;
  }
  if (cnt) answer++;
}

console.log(answer);

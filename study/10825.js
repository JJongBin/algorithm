const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/10825.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input.map(item => item.split(' '));
input.shift();

input.sort((a, b) => {
  if (a[1] === b[1]) {
    if (a[2] === b[2]) {
      if (a[3] === b[3]) {
        if (a[0] > b[0]) return 1;
        else if (a[0] < b[0]) return -1;
        else return 0;
      }
      return +b[3] - +a[3];
    }
    return +a[2] - +b[2];
  }
  return +b[1] - +a[1];
});

const answer = [];
for (const n of input) answer.push(n[0]);
console.log(answer.join('\n'));

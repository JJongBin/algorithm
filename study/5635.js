const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/5635.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');
const n = +input.shift();

input = input.map(people => people.split(' '));
input.sort((a, b) => {
  if (a[3] === b[3]) {
    if (a[2] === b[2]) return +a[1] - +b[1];
    return +a[2] - +b[2];
  }
  return +a[3] - +b[3];
});

console.log(input[input.length - 1][0]);
console.log(input[0][0]);

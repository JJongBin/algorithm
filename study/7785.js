const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/7758.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input.map(item => item.split(' '));

const hash = new Map();
for (let i = 1; i < +input[0] + 1; i++) {
  hash.set(input[i][0], input[i][1] === 'enter' ? 1 : 0);
}

let arr = [];
for (const [name, check] of hash) {
  if (check) arr.push(name);
}

arr = arr.sort((a, b) => (a > b ? -1 : a < b ? 1 : 0));

console.log(arr.join('\n'));

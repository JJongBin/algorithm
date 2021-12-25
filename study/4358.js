const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/4358.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const hash = new Map();

const len = input.length;
for (const name of input) {
  hash.set(name, (hash.get(name) || 0) + 1);
}

for (let name of [...hash.keys()].sort()) {
  console.log(name, ((hash.get(name) / len) * 100).toFixed(4));
}

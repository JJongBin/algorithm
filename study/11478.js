const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/11478.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n')[0];

const hash = new Set();

for (let i = 0; i < input.length; i++) {
  let str = '';
  for (let j = i; j < input.length; j++) {
    str += input[j];
    hash.add(str);
  }
}
console.log(hash.size);

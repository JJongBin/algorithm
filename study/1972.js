const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/1972.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n');

const check = str => {
  const len = str.length;
  for (let i = 1; i < len; i++) {
    const hash = new Set();
    for (let j = 0; j < len - i; j++) {
      const s = str[j] + str[j + i];
      if (hash.has(s)) return false;
      hash.add(s);
    }
  }
  return true;
};

for (let i = 0; i < input.length - 1; i++) console.log(`${input[i]} is${check(input[i]) ? ' ' : ' NOT '}surprising.`);

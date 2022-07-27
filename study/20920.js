const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/20920.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const hash = new Map();
for (let i = 1; i < 1 + n; i++) {
  if (input[i].length >= m) hash.set(input[i], (hash.get(input[i]) || 0) + 1);
}

const sortArr = [...hash].sort((a, b) => {
  if (a[1] === b[1]) {
    if (a[0].length === b[0].length) {
      if (a[0] < b[0]) return -1;
      else if (b[0] > a[0]) return 1;
      else return 0;
    }
    return b[0].length - a[0].length;
  }
  return b[1] - a[1];
});

const res = [];
for (const w of sortArr) res.push(w[0]);
console.log(res.join('\n'));

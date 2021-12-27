const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/2002.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const len = input.length;
let compare = 1;
const check = new Array(+input[0] + 1).fill(0);

const hash = new Map();
for (let i = 1; i < (len - 1) / 2 + 1; i++) {
  hash.set(input[i], i);
}

let answer = 0;
for (let i = (len - 1) / 2 + 1; i < len; i++) {
  const num = hash.get(input[i]);

  if (compare < num) {
    check[num] = 1;
    answer++;
  } else if (compare === num) {
    while (compare <= input[0]) {
      if (check[++compare] === 0) break;
    }
  }
}
console.log(answer);

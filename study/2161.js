const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/2161.txt';

let input = +fs.readFileSync(filePath).toString().trim().split('\n')[0];
const card = Array.from({ length: input }, (v, i) => i + 1);
const answer = [];

while (card.length) {
  answer.push(card.shift());
  const c = card.shift();
  if (c) card.push(c);
}
console.log(answer.join(' '));

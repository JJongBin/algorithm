const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/14719.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input.map(item => item.split(' ').map(Number));
const [h, w] = input.shift();

let answer = 0;
for (let i = h; i > 0; i--) {
  const blocks = [];
  for (let j = 0; j < w; j++) if (i <= input[0][j]) blocks.push(j);
  if (blocks.length < 2) continue;
  for (let j = 0; j < blocks.length - 1; j++) answer += blocks[j + 1] - blocks[j] - 1;
}

console.log(answer);

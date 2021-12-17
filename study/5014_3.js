const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/5014.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [f, s, g, u, d] = input[0].split(' ').map(item => +item);
let check = new Array(1000001).fill(0);
check[s] = 1;

let flag = true;
let cnt = 0;

const queue = [];
queue.push(s);

while (queue.length) {
  const len = queue.length;
  for (let i = 0; i < len; i++) {
    const s = queue.shift();
    if (s === g) {
      flag = false;
      check[s] = 1;
      console.log(cnt);
    }

    for (const move of [s + u, s - d]) {
      if (move >= 1 && move <= f && check[move] === 0) {
        check[move] = 1;
        queue.push(move);
      }
    }
  }
  if (!flag) break;
  cnt++;
}
if (flag) console.log('use the stairs');

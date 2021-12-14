const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/1987.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [r, c] = input
  .shift()
  .split(' ')
  .map(item => +item);

// console.log(r);
// console.log(c);
input = input.map(item => item.split(''));
// console.log(input);

const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];
const check = new Array(r);
for (let i = 0; i < r; i++) {
  check[i] = new Array(c).fill(0);
}

const strCheck = new Set();
const dfs = (x, y) => {
  for (let k = 0; k < 4; k++) {
    const xx = x + dx[k];
    const yy = y + dy[k];
    const temp = strCheck.size;
    if (xx >= 0 && xx < r && yy >= 0 && yy < c && check[xx][yy] === 0) {
      strCheck.add(input[xx][yy]);
      answer = Math.max(strCheck.size, answer);
      if (strCheck.size === temp) continue;
      check[xx][yy] = 1;
      dfs(xx, yy);
      check[xx][yy] = 0;
      strCheck.delete(input[xx][yy]);
    }
  }
};
let answer = 1;
check[0][0] = 1;
strCheck.add(input[0][0]);
dfs(0, 0);
console.log(answer);

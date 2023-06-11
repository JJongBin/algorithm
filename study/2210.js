const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/2210.txt';

let inputs = fs.readFileSync(filePath).toString().trim().split('\n');

const board = inputs.map(input => input.split(' '));
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
const answerSet = new Set();

const dfs = (str, x, y) => {
  for (let k = 0; k < 4; k++) {
    const xx = x + dx[k];
    const yy = y + dy[k];

    if (xx < 0 || xx >= 5 || yy < 0 || yy >= 5) continue;

    const newStr = str + board[xx][yy];
    if (newStr.length >= 6) answerSet.add(newStr);
    else dfs(newStr, xx, yy);
  }
};

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    dfs(board[i][j], i, j);
  }
}

console.log(answerSet.size);

const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './testcase/3085.txt';
let board = fs.readFileSync(filePath).toString().trim().split('\n');
let answer = 1;

const n = +board.shift();
board = board.map(str => str.split(''));
const checkCandy = () => {
  for (let i = 0; i < n; i++) {
    let cnt1 = 1;
    let cnt2 = 1;
    for (let j = 0; j < n - 1; j++) {
      if (board[i][j] === board[i][j + 1]) cnt1++;
      else cnt1 = 1;

      if (board[j][i] === board[j + 1][i]) cnt2++;
      else cnt2 = 1;
      answer = Math.max(answer, cnt1, cnt2);
    }
  }
};

for (i = 0; i < n; i++) {
  for (j = 0; j < n - 1; j++) {
    const temp1 = board[i][j];
    board[i][j] = board[i][j + 1];
    board[i][j + 1] = temp1;
    checkCandy();
    board[i][j + 1] = board[i][j];
    board[i][j] = temp1;

    const temp2 = board[j][i];
    board[j][i] = board[j + 1][i];
    board[j + 1][i] = temp2;
    checkCandy();
    board[j + 1][i] = board[j][i];
    board[j][i] = temp2;
  }
}

console.log(answer);

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/11559.txt';

let board = fs.readFileSync(filePath).toString().trim().split('\n');
board = board.map(item => item.split(''));

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const popPuyo = (x, y, check) => {
  const queue = [[x, y]];
  check[x][y] = 1;
  const popArr = [[x, y]];

  while (queue.length) {
    const [xx, yy] = queue.pop();
    for (let k = 0; k < 4; k++) {
      const nextX = xx + dx[k];
      const nextY = yy + dy[k];

      if (nextX < 0 || nextX >= 12 || nextY < 0 || nextY >= 6) continue;
      if (check[nextX][nextY] || board[nextX][nextY] !== board[x][y]) continue;

      popArr.push([nextX, nextY]);
      queue.push([nextX, nextY]);
      check[nextX][nextY] = 1;
    }
  }

  return popArr.length >= 4 ? popArr : [];
};

const sortBoard = popArr => {
  for (const [x, y] of popArr) board[x][y] = '.';
  for (let j = 0; j < 6; j++) {
    const temp = [];
    for (let i = 11; i >= 0; i--) {
      if (board[i][j] !== '.') temp.push(board[i][j]);
      board[i][j] = '.';
    }

    for (let i = 11; i >= 0; i--) {
      if (temp.length) {
        board[i][j] = temp.shift();
      } else break;
    }
  }
};

let answer = 0;
while (true) {
  const popArr = [];
  const check = [...Array(12)].map(_ => new Array(6).fill(0));
  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 6; j++) {
      if (board[i][j] !== '.') for (const p of popPuyo(i, j, check)) popArr.push(p);
    }
  }
  if (!popArr.length) break;

  sortBoard(popArr);
  answer++;
}

console.log(answer);

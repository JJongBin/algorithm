const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './testcase/18111.txt';
let board = fs.readFileSync(filePath).toString().trim().split('\n');

let answer = Infinity;
let height = 0;

board = board.map(b => b.split(' ').map(Number));
const [n, m, b] = board.shift();

const total = board.reduce((cnt, row) => cnt + row.reduce((a, b) => a + b, 0), b);
let max = Math.min(Math.floor(total / (n * m)), 256);

const flatGround = num => {
  let time = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] < num) time += num - board[i][j];
      else if (board[i][j] > num) time += (board[i][j] - num) * 2;
    }
  }
  return time;
};

for (let i = 0; i <= max; i++) {
  const time = flatGround(i);
  if (time <= answer) {
    answer = time;
    height = i;
  }
}

console.log(`${answer} ${height}`);

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/3190.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input[0];
const k = +input[1];
const apples = input.slice(2, 2 + k).map(item => item.split(' ').map(Number));
const l = +input[2 + k];
const directions = input
  .slice(3 + k, input.length)
  .map(item => item.split(' '))
  .sort((a, b) => +b[0] - +a[0]);

let snake = 0;
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];
let head = [0, 0];
let tail = [0, 0];
let time = 0;

const board = [...Array(n)].map(_ => new Array(n).fill(0));
for (const apple of apples) board[apple[0] - 1][apple[1] - 1] = 1;

while (true) {
  // 방향 전환
  if (directions.length) {
    if (time === +directions[directions.length - 1][0]) {
      const change = directions.pop()[1];
      if (change === 'D') snake = snake === 3 ? 0 : snake + 1;
      if (change === 'L') snake = snake === 0 ? 3 : snake - 1;
    }
  }

  // 머리의 이동
  const tempHead = [...head];
  head = [head[0] + dx[snake], head[1] + dy[snake]];
  board[tempHead[0]][tempHead[1]] = [...head];
  time++;

  // 끝나는 경우
  if (head[0] < 0 || head[0] >= n || head[1] < 0 || head[1] >= n) break;
  if (board[head[0]][head[1]] !== 1 && board[head[0]][head[1]] !== 0) break;
  // 꼬리가 없어질때
  else if (board[head[0]][head[1]] === 0) {
    const tempTail = [...tail];
    tail = board[tail[0]][tail[1]];
    board[tempTail[0]][tempTail[1]] = 0;
  }
}
console.log(time);

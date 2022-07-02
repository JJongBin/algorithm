const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/19238.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input.map(item => item.split(' ').map(Number));

let [n, m, fuel] = input[0];
const board = input.slice(1, 1 + n);
let [x, y] = input[1 + n].map(item => item - 1);
const guests = [...Array(n)].map(_ => new Array(n).fill(0));

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

for (let i = 2 + n; i < input.length; i++)
  guests[input[i][0] - 1][input[i][1] - 1] = [i - n - 1, [input[i][2] - 1, input[i][3] - 1]];

const findGuests = (x, y) => {
  if (guests[x][y]) return [0, x, y];
  const queue = [[x, y]];
  const check = [...Array(n)].map(_ => new Array(n).fill(0));
  check[x][y] = 1;
  const temp = [];

  let cnt = 0;
  while (queue.length && !temp.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const [xx, yy] = queue.shift();
      for (let k = 0; k < 4; k++) {
        const nextX = xx + dx[k];
        const nextY = yy + dy[k];

        if (nextX < 0 || nextX >= n || nextY < 0 || nextY >= n) continue;
        if (check[nextX][nextY]) continue;
        if (board[nextX][nextY]) continue;
        if (guests[nextX][nextY]) temp.push([nextX, nextY]);
        check[nextX][nextY] = 1;
        queue.push([nextX, nextY]);
      }
    }
    cnt++;
  }
  temp.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));
  return temp.length ? [cnt, temp[0][0], temp[0][1]] : [Infinity, 0, 0];
};

const moveDestination = (x1, y1, x2, y2) => {
  const queue = [[x1, y1]];
  const check = [...Array(n)].map(_ => new Array(n).fill(0));
  check[x1][y1] = 1;

  let cnt = 1;
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const [xx, yy] = queue.shift();
      for (let k = 0; k < 4; k++) {
        const nextX = xx + dx[k];
        const nextY = yy + dy[k];

        if (nextX < 0 || nextX >= n || nextY < 0 || nextY >= n) continue;
        if (check[nextX][nextY]) continue;
        if (board[nextX][nextY]) continue;

        if (x2 === nextX && y2 === nextY) {
          guests[x1][y1] = 0;
          return [cnt, x2, y2];
        }
        check[nextX][nextY] = 1;
        queue.push([nextX, nextY]);
      }
    }
    cnt++;
  }
  return [Infinity, 0, 0];
};

for (let i = 0; i < m; i++) {
  let [cnt, nextX, nextY] = findGuests(x, y);
  if (cnt > fuel) {
    fuel = -1;
    break;
  }
  x = nextX;
  y = nextY;
  fuel -= cnt;

  [cnt, nextX, nextY] = moveDestination(x, y, guests[x][y][1][0], guests[x][y][1][1]);
  if (cnt > fuel) {
    fuel = -1;
    break;
  }
  x = nextX;
  y = nextY;
  fuel += cnt;
}
console.log(fuel);

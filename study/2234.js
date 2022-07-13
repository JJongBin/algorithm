const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/2234.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input.map(item => item.split(' ').map(Number));

const [n, m] = input.shift();
const check = [...Array(m)].map(_ => new Array(n).fill(0));

const checkWall = num => num.toString(2).padStart(4, '0');

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

const dfs = (pos, num) => {
  const queue = [pos];
  check[pos[0]][pos[1]] = num;
  let size = 1;
  while (queue.length) {
    const [x, y] = queue.pop();
    const dir = checkWall(input[x][y]);
    for (let k = 0; k < 4; k++) {
      if (+dir[k]) continue;
      const xx = x + dx[k];
      const yy = y + dy[k];
      if (xx >= 0 && xx < m && yy >= 0 && yy < n) {
        if (check[xx][yy]) continue;
        check[xx][yy] = num;
        size++;
        queue.push([xx, yy]);
      }
    }
  }
  return size;
};

const rooms = [];
const unionRooms = [];
let num = 0;
for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    if (check[i][j]) continue;
    num++;
    const room = dfs([i, j], num);
    rooms.push(room);
  }
}

const len = rooms.length;
const unionCheck = [...Array(len + 1)].map(_ => new Array(len + 1).fill(0));
for (let i = 0; i < m; i++) {
  for (let j = 0; j < n - 1; j++) {
    if (check[i][j] !== check[i][j + 1] && !unionCheck[check[i][j] - 1][check[i][j + 1] - 1]) {
      unionRooms.push(rooms[check[i][j] - 1] + rooms[check[i][j + 1] - 1]);
      unionCheck[check[i][j] - 1][check[i][j + 1] - 1] = 1;
      unionCheck[check[i][j + 1] - 1][check[i][j] - 1] = 1;
    }
  }
}

for (let j = 0; j < n; j++) {
  for (let i = 0; i < m - 1; i++) {
    if (check[i][j] !== check[i + 1][j] && !unionCheck[check[i][j] - 1][check[i + 1][j] - 1]) {
      unionRooms.push(rooms[check[i][j] - 1] + rooms[check[i + 1][j] - 1]);
      unionCheck[check[i][j] - 1][check[i + 1][j] - 1] = 1;
      unionCheck[check[i + 1][j] - 1][check[i][j] - 1] = 1;
    }
  }
}

console.log(rooms.length);
console.log(Math.max(...rooms));
console.log(Math.max(...unionRooms));

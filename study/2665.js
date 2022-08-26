const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/2665.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input.shift();
input = input.map(str => str.split('').map(Number));
const check = [...Array(n)].map(_ => new Array(n).fill(0));
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const addRoom = (posX, posY) => {
  const queue = [[posX, posY]];
  const room = [[posX, posY]];
  check[posX][posY] = 1;

  while (queue.length) {
    const [x, y] = queue.shift();
    for (let k = 0; k < 4; k++) {
      const xx = x + dx[k];
      const yy = y + dy[k];
      if (xx < 0 || xx >= n || yy < 0 || yy >= n) continue;
      if (!input[xx][yy]) continue;
      if (check[xx][yy]) continue;
      queue.push([xx, yy]);
      room.push([xx, yy]);
      check[xx][yy] = 1;
    }
  }
  return room;
};

let cnt = 0;
const bfs = () => {
  let queue = addRoom(0, 0);
  if (check[n - 1][n - 1]) return;

  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const [x, y] = queue.shift();
      for (let k = 0; k < 4; k++) {
        const xx = x + dx[k];
        const yy = y + dy[k];
        if (xx < 0 || xx >= n || yy < 0 || yy >= n) continue;
        if (check[xx][yy]) continue;
        if (input[xx][yy]) continue;
        queue.push([xx, yy]);
        check[xx][yy] = 1;

        for (let k = 0; k < 4; k++) {
          const checkX = xx + dx[k];
          const checkY = yy + dy[k];
          if (checkX < 0 || checkX >= n || checkY < 0 || checkY >= n) continue;
          if (input[checkX][checkY]) queue = [...queue, ...addRoom(checkX, checkY)];
          if (check[n - 1][n - 1]) {
            cnt += 1;
            return;
          }
        }
      }
    }

    cnt += 1;
  }
};
bfs();
console.log(cnt);

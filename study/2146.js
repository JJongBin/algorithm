const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/2146.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input.shift();
input = input.map(str => str.split(' ').map(Number));
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const groundCompare = (posX, posY, ground) => {
  const queue = [[posX, posY]];
  const check = [...Array(n)].map(_ => new Array(n).fill(0));
  check[posX][posY] = 1;

  while (queue.length) {
    const [x, y] = queue.shift();
    input[x][y] = ground;
    for (let k = 0; k < 4; k++) {
      const xx = x + dx[k];
      const yy = y + dy[k];
      if (xx < 0 || xx >= n || yy < 0 || yy >= n) continue;
      if (check[xx][yy]) continue;
      if (input[xx][yy] !== 1) continue;
      queue.push([xx, yy]);
      check[xx][yy] = 1;
    }
  }
};

let ground = 2;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (input[i][j] === 1) {
      groundCompare(i, j, ground);
      ground += 1;
    }
  }
}

let answer = Infinity;
const bfs = (posX, posY, ground) => {
  const queue = [[posX, posY]];
  const check = [...Array(n)].map(_ => new Array(n).fill(0));
  check[posX][posY] = 1;
  let dist = 0;

  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const [x, y] = queue.shift();
      for (let k = 0; k < 4; k++) {
        const xx = x + dx[k];
        const yy = y + dy[k];
        if (xx < 0 || xx >= n || yy < 0 || yy >= n) continue;
        if (check[xx][yy]) continue;
        if (input[xx][yy] === ground) continue;
        if (input[xx][yy]) {
          answer = Math.min(answer, dist);
          return;
        }
        queue.push([xx, yy]);
        check[xx][yy] = 1;
      }
    }
    dist += 1;
  }
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (input[i][j]) bfs(i, j, input[i][j]);
  }
}
console.log(answer);

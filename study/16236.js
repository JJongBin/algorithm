const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'testcase/16236.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input.map(item => item.split(' ').map(Number));

const n = input.shift()[0];

const dx = [-1, 0, 0, 1];
const dy = [0, -1, 1, 0];

let answer = 0;
const shake = [2, 0];
let pos = [0, 0];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (input[i][j] === 9) {
      pos = [i, j];
      input[i][j] = 0;
    }
  }
}

const bfs = startPos => {
  const queue = [startPos];
  const check = [...Array(n)].map(_ => new Array(n).fill(0));
  check[startPos[0]][startPos[1]] = 1;
  let L = 0;
  let move = false;

  while (queue.length) {
    const len = queue.length;
    L++;
    for (let ii = 0; ii < len; ii++) {
      const [tempX, tempY] = queue.shift();
      for (let k = 0; k < 4; k++) {
        const xx = tempX + dx[k];
        const yy = tempY + dy[k];
        if (xx >= 0 && xx < n && yy >= 0 && yy < n) {
          if (!check[xx][yy] && shake[0] >= input[xx][yy]) {
            if (shake[0] > input[xx][yy] && input[xx][yy]) move = true;
            queue.push([xx, yy]);
            check[xx][yy] = 1;
          }
        }
      }
    }
    if (move) {
      queue.sort((a, b) => a[1] - b[1]);
      queue.sort((a, b) => a[0] - b[0]);

      for (const posXY of queue) {
        const [xx, yy] = posXY;
        if (shake[0] > input[xx][yy] && input[xx][yy]) {
          shake[1]++;
          input[xx][yy] = 0;
          pos = [xx, yy];
          if (shake[0] === shake[1]) {
            shake[0]++;
            shake[1] = 0;
          }
          return L;
        }
      }
    }
  }
  return false;
};

while (true) {
  const res = bfs(pos);
  if (!res) break;
  else answer += res;
}

console.log(answer);

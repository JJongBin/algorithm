const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/3055.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [r, c] = input.shift().split(' ').map(Number);

let answer = 1;
const queueWater = [];
const queue = [];
const water = [...Array(r)].map(e => new Array(c).fill(0));

let pos = [0, 0];

for (let i = 0; i < r; i++) {
  for (let j = 0; j < c; j++) {
    if (input[i][j] === '*') {
      water[i][j] = 1;
      queueWater.push([i, j]);
    } else if (input[i][j] === 'D') pos = [i, j];
    else if (input[i][j] === 'S') queue.push([i, j]);
  }
}

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const BFS = () => {
  const check = [...Array(r)].map(e => new Array(c).fill(0));
  check[queue[0][0]][queue[0][1]] = 1;

  while (queue.length) {
    const len = queueWater.length;
    const len2 = queue.length;

    for (let i = 0; i < len; i++) {
      const [x, y] = queueWater.shift();
      for (let k = 0; k < 4; k++) {
        const xx = x + dx[k];
        const yy = y + dy[k];

        if (xx >= 0 && xx < r && yy >= 0 && yy < c) {
          if (water[xx][yy] === 0 && input[xx][yy] !== 'X' && input[xx][yy] !== 'D') {
            queueWater.push([xx, yy]);
            water[xx][yy] = 1;
          }
        }
      }
    }

    for (let i = 0; i < len2; i++) {
      const [x, y] = queue.shift();
      for (let k = 0; k < 4; k++) {
        const xx = x + dx[k];
        const yy = y + dy[k];

        if (xx >= 0 && xx < r && yy >= 0 && yy < c) {
          if (pos[0] === xx && pos[1] === yy) return answer;
          if (check[xx][yy] === 0 && input[xx][yy] === '.' && water[xx][yy] === 0) {
            queue.push([xx, yy]);
            check[xx][yy] = 1;
          }
        }
      }
    }

    answer++;
  }
  return 'KAKTUS';
};

console.log(BFS());

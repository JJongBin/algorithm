const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/2206.txt';

let inputs = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = inputs.shift().split(' ').map(Number);

const board = inputs.map(input => input.split('').map(Number));
const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];
const check = [...Array(n)].map(_ => [...Array(m)].map(_ => new Array(2).fill(0)));
const bfs = () => {
  const queue = [[0, 0, 0]];
  check[0][0][0] = 1;
  let cnt = 1;
  let idx = 0;

  while (idx < queue.length) {
    const len = queue.length - idx;
    for (let i = 0; i < len; i++) {
      const [x, y, isBreaked] = queue[idx];
      for (let k = 0; k < 4; k++) {
        const xx = x + dx[k];
        const yy = y + dy[k];
        if (xx < 0 || xx >= n || yy < 0 || yy >= m) continue;
        if (check[xx][yy][isBreaked]) continue;

        if (xx === n - 1 && yy === m - 1) return cnt + 1;

        if (board[xx][yy]) {
          if (!isBreaked) {
            check[xx][yy][1] = 1;
            queue.push([xx, yy, 1]);
          }
          continue;
        }

        check[xx][yy][isBreaked] = 1;
        queue.push([xx, yy, isBreaked]);
      }
      idx += 1;
    }
    cnt += 1;
  }
  return -1;
};

const answer = n === 1 && m === 1 ? 1 : bfs();
console.log(answer);

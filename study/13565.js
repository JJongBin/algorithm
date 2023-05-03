const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './testcase/13565.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [M, N] = input.shift().split(' ').map(Number);

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const check = [...Array(M)].map(_ => new Array(N).fill(0));
const dfs = (posX, posY) => {
  const queue = [[posX, posY]];
  check[posX][posY] = 1;

  while (queue.length) {
    const [x, y] = queue.pop();
    for (let k = 0; k < 4; k++) {
      const xx = x + dx[k];
      const yy = y + dy[k];

      if (xx < 0 || xx >= M || yy < 0 || yy >= N) continue;
      if (check[xx][yy]) continue;
      if (+input[xx][yy]) continue;
      if (xx === M - 1) return true;
      queue.push([xx, yy]);
      check[xx][yy] = 1;
    }
  }

  return false;
};

let flag = false;
for (let i = 0; i < N; i++) {
  if (!+input[0][i] && !check[0][i]) flag = flag || dfs(0, i);
}

console.log(flag ? 'YES' : 'NO');

const { BADFLAGS } = require('dns');
const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './testcase/17129.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input.shift().split(' ').map(Number);
input = input.map(str => str.split('').map(Number));

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
const bfs = (posX, posY) => {
  const queue = [[posX, posY]];
  const check = [...Array(n)].map(_ => new Array(m).fill(0));
  check[posX][posY] = 1;
  let dist = 1;

  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const [x, y] = queue.shift();
      for (let k = 0; k < 4; k++) {
        const xx = x + dx[k];
        const yy = y + dy[k];

        if (xx < 0 || xx >= n || yy < 0 || yy >= m) continue;
        if (check[xx][yy]) continue;
        if (input[xx][yy] === 1) continue;
        if (input[xx][yy]) return dist;
        queue.push([xx, yy]);
        check[xx][yy] = 1;
      }
    }
    dist += 1;
  }
};

let answer = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (input[i][j] === 2) answer = bfs(i, j);
  }
}
console.log(answer ? 'TAK' + '\n' + answer : 'NIE');

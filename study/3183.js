const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/3183.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input.shift().split(' ').map(Number);

const check = [...Array(n)].map(_ => new Array(m).fill(0));
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const bfs = (posX, posY) => {
  let v = input[posX][posY] === 'v' ? 1 : 0;
  let o = input[posX][posY] === 'o' ? 1 : 0;
  const queue = [[posX, posY]];
  check[posX][posY] = 1;

  while (queue.length) {
    const [x, y] = queue.shift();
    for (let k = 0; k < 4; k++) {
      const xx = x + dx[k];
      const yy = y + dy[k];
      if (xx < 0 || xx >= n || yy < 0 || yy >= m) continue;
      if (check[xx][yy]) continue;
      if (input[xx][yy] === '#') continue;
      if (input[xx][yy] === 'v') v += 1;
      if (input[xx][yy] === 'o') o += 1;
      check[xx][yy] = 1;
      queue.push([xx, yy]);
    }
  }
  return [v, o];
};

let vCnt = 0;
let oCnt = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (input[i][j] === '#') continue;
    if (check[i][j]) continue;
    const [v, o] = bfs(i, j);
    if (v < o) oCnt += o;
    else vCnt += v;
  }
}

console.log(oCnt, vCnt);

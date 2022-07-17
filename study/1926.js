const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/1926.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input.map(item => item.split(' ').map(Number));

const [n, m] = input.shift();

const check = [...Array(n)].map(_ => new Array(m).fill(0));
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const dfs = (posX, posY) => {
  const queue = [[posX, posY]];
  check[posX][posY] = 1;
  let size = 1;
  while (queue.length) {
    const [x, y] = queue.pop();
    for (let k = 0; k < 4; k++) {
      const xx = x + dx[k];
      const yy = y + dy[k];
      if (xx < 0 || xx >= n || yy < 0 || yy >= m) continue;
      if (check[xx][yy]) continue;
      if (!input[xx][yy]) continue;
      queue.push([xx, yy]);
      check[xx][yy] = 1;
      size++;
    }
  }

  return size;
};

let cnt = 0;
let maxSize = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (!input[i][j] || check[i][j]) continue;
    cnt++;
    const size = dfs(i, j);
    maxSize = Math.max(maxSize, size);
  }
}

console.log(cnt);
console.log(maxSize);

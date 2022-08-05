const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/14716.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input.map(item => item.split(' ').map(Number));

const dx = [1, -1, 0, 0, 1, 1, -1, -1];
const dy = [0, 0, 1, -1, 1, -1, -1, 1];
const [m, n] = input.shift();

const check = [...Array(m)].map(_ => new Array(n).fill(0));
const bfs = (x, y) => {
  const queue = [[x, y]];
  check[x][y] = 1;

  while (queue.length) {
    const [x, y] = queue.shift();
    for (let k = 0; k < 8; k++) {
      const xx = x + dx[k];
      const yy = y + dy[k];
      if (xx < 0 || xx >= m || yy < 0 || yy >= n) continue;
      if (check[xx][yy]) continue;
      if (!input[xx][yy]) continue;
      check[xx][yy] = 1;
      queue.push([xx, yy]);
    }
  }
};

let answer = 0;
for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    if (input[i][j] && !check[i][j]) {
      bfs(i, j);
      answer += 1;
    }
  }
}

console.log(answer);

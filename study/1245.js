const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/1245.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input.map(item => item.split(' ').map(Number));

const [n, m] = input.shift();
const dx = [1, -1, 0, 0, 1, 1, -1, -1];
const dy = [0, 0, 1, -1, 1, -1, -1, 1];

// const height = [...Array(n)].map(_ => new Array(m).fill(0));
const check = [...Array(n)].map(_ => new Array(m).fill(0));

const bfs = (x, y) => {
  const queue = [[x, y]];
  check[x][y] = 1;
  let isTop = true;

  while (queue.length) {
    const [xx, yy] = queue.shift();
    for (let k = 0; k < 8; k++) {
      const nextX = xx + dx[k];
      const nextY = yy + dy[k];
      if (nextX < 0 || nextX >= n || nextY < 0 || nextY >= m) continue;
      if (input[x][y] === input[nextX][nextY]) {
        if (check[nextX][nextY]) continue;
        check[nextX][nextY] = 1;
        queue.push([nextX, nextY]);
      } else if (input[x][y] < input[nextX][nextY]) isTop = false;
    }
  }
  return isTop;
};

let answer = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (input[i][j] && !check[i][j]) {
      if (bfs(i, j)) answer += 1;
    }
  }
}

console.log(answer);

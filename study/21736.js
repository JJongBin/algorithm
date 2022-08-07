const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/21736.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input.shift().split(' ').map(Number);

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const check = [...Array(n)].map(_ => new Array(m).fill(0));
const dfs = (posX, posY) => {
  const queue = [[posX, posY]];
  check[posX][posY] = 1;

  let cnt = 0;
  while (queue.length) {
    const [x, y] = queue.pop();

    for (let k = 0; k < 4; k++) {
      const xx = x + dx[k];
      const yy = y + dy[k];
      if (xx < 0 || xx >= n || yy < 0 || yy >= m) continue;
      if (check[xx][yy]) continue;
      if (input[xx][yy] === 'X') continue;
      if (input[xx][yy] === 'P') cnt += 1;
      check[xx][yy] = 1;
      queue.push([xx, yy]);
    }
  }
  return cnt;
};

outer: for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (input[i][j] === 'I') {
      const cnt = dfs(i, j);
      console.log(cnt ? cnt : 'TT');
      break outer;
    }
  }
}

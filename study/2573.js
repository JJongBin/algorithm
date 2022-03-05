const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/2573.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input.map(item => item.split(' ').map(Number));

const [n, m] = input.shift();
let answer = 0;

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const bfs = (posX, posY, check, cntCheck) => {
  const queue = [[posX, posY]];
  check[posX][posY] = 1;

  while (queue.length) {
    const [x, y] = queue.shift();
    let cnt = 0;

    for (let k = 0; k < 4; k++) {
      const xx = x + dx[k];
      const yy = y + dy[k];
      if (xx >= 0 && xx < n && yy >= 0 && yy < m) {
        if (input[xx][yy] && !check[xx][yy]) {
          check[xx][yy] = 1;
          queue.push([xx, yy]);
        }
        if (!input[xx][yy]) cnt++;
      }
    }
    cntCheck[x][y] = cnt;
  }
};

outer: while (true) {
  const check = [...Array(n)].map(_ => new Array(m).fill(0));
  const cntCheck = [...Array(n)].map(_ => new Array(m).fill(0));
  let bfsCnt = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (input[i][j] && !check[i][j]) {
        if (bfsCnt) break outer;
        bfsCnt++;
        bfs(i, j, check, cntCheck);
      }
    }
  }
  if (!bfsCnt) {
    answer = 0;
    break;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      input[i][j] -= cntCheck[i][j];
      input[i][j] = input[i][j] < 0 ? 0 : input[i][j];
    }
  }
  answer++;
}
console.log(answer);

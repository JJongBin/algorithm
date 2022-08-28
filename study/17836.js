const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/17836.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m, t] = input.shift().split(' ').map(Number);
input = input.map(str => str.split(' ').map(Number));
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const bfs = (startX, startY, endX, endY, time) => {
  const queue = [[startX, startY]];
  const check = [...Array(n)].map(_ => new Array(m).fill(0));
  check[startX][startY] = 1;

  let cnt = 1;
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const [x, y] = queue.shift();

      for (let k = 0; k < 4; k++) {
        const xx = x + dx[k];
        const yy = y + dy[k];
        if (xx < 0 || xx >= n || yy < 0 || yy >= m) continue;
        if (input[xx][yy] === 1) continue;
        if (check[xx][yy]) continue;
        if (xx === endX && yy === endY) return cnt;
        queue.push([xx, yy]);
        check[xx][yy] = 1;
      }
    }
    cnt++;
    if (+time < cnt) return +time + 1;
  }
  return +time + 1;
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (input[i][j] === 2) {
      const findSwordTime = bfs(0, 0, i, j, t);
      const findPrincessTime = bfs(0, 0, n - 1, m - 1, t);
      const time = Math.min(findSwordTime + n - 1 - i + m - 1 - j, findPrincessTime);

      console.log(time > +t ? 'Fail' : time);
      break;
    }
  }
}

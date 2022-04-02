const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'testcase/14500.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input.map(item => item.split(' ').map(Number));

let answer = 0;
const [n, m] = input.shift();
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
const check = [...Array(n)].map(_ => new Array(m).fill(0));

const dfs = (x, y, cnt, sum) => {
  if (cnt === 4) {
    answer = Math.max(answer, sum);
    return;
  }
  for (let k = 0; k < 4; k++) {
    const xx = x + dx[k];
    const yy = y + dy[k];
    if (xx >= 0 && xx < n && yy >= 0 && yy < m) {
      if (check[xx][yy]) continue;
      if (cnt === 2) {
        check[xx][yy] = 1;
        dfs(x, y, cnt + 1, sum + input[xx][yy]);
        check[xx][yy] = 0;
      }
      check[xx][yy] = 1;
      dfs(xx, yy, cnt + 1, sum + input[xx][yy]);
      check[xx][yy] = 0;
    }
  }
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    check[i][j] = 1;
    dfs(i, j, 1, input[i][j]);
    check[i][j] = 0;
  }
}

console.log(answer);

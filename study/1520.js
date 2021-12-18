const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/1520.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input.map(item => item.split(' ').map(item2 => +item2));

const [n, m] = input.shift();

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
let cnt = 0;

const dp = new Array(n);
for (let i = 0; i < n; i++) dp[i] = new Array(m).fill(-1);

const dfs = (x, y) => {
  if (x === n - 1 && y === m - 1) return 1;

  if (dp[x][y] !== -1) return dp[x][y];

  let cnt = 0;
  for (let i = 0; i < 4; i++) {
    const xx = x + dx[i];
    const yy = y + dy[i];
    if (xx >= 0 && xx < n && yy >= 0 && yy < m && input[x][y] > input[xx][yy]) {
      cnt += dfs(xx, yy);
    }
  }

  return (dp[x][y] = cnt);
};

console.log(dfs(0, 0));

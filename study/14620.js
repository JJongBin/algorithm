const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'testcase/14620.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input.map(item => item.split(' ').map(Number));

let answer = Infinity;
const n = input.shift()[0];

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const check = [...Array(n)].map(e => new Array(n).fill(0));

const dfs = (cnt, cost, check) => {
  if (cnt === 3) {
    answer = Math.min(answer, cost);
    return;
  }
  for (let i = 1; i < n - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      if (!check[i][j] && !check[i - 1][j] && !check[i][j + 1] && !check[i + 1][j] && !check[i][j - 1]) {
        let nowCost = input[i][j];
        for (let k = 0; k < 4; k++) {
          const x = i + dx[k];
          const y = j + dy[k];
          check[x][y] = 1;
          nowCost += input[x][y];
        }

        dfs(cnt + 1, cost + nowCost, check);

        for (let k = 0; k < 4; k++) {
          const x = i + dx[k];
          const y = j + dy[k];
          check[x][y] = 0;
        }
      }
    }
  }
};

dfs(0, 0, check);
console.log(answer);

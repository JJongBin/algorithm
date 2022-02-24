const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/2638.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input.map(item => item.split(' ').map(Number));
const [n, m] = input.shift();

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const dfs = () => {
  const queue = [[0, 0]];
  const check = [...Array(n)].map(e => new Array(m).fill(0));
  const removeCheck = [...Array(n)].map(e => new Array(m).fill(0));
  const remove = [];
  check[0][0] = 1;

  while (queue.length) {
    const [x, y] = queue.pop();
    for (let k = 0; k < 4; k++) {
      const xx = x + dx[k];
      const yy = y + dy[k];
      if (xx >= 0 && xx < n && yy >= 0 && yy < m) {
        if (check[xx][yy] === 1) continue;

        if (input[xx][yy] === 0) {
          check[xx][yy] = 1;
          queue.push([xx, yy]);
        } else if (input[xx][yy] === 1) {
          if (removeCheck[xx][yy] >= 1) {
            remove.push([xx, yy]);
            check[xx][yy] = 1;
          } else removeCheck[xx][yy] += 1;
        }
      }
    }
  }
  return remove;
};

let removeCheese = dfs();
let answer = 0;

while (removeCheese.length) {
  for (let i = 0; i < removeCheese.length; i++) {
    input[removeCheese[i][0]][removeCheese[i][1]] = 0;
  }
  answer++;
  removeCheese = dfs();
}

console.log(answer);

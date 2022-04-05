const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/16234.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input.map(item => item.split(' ').map(Number));

const [n, l, r] = input.shift();
let answer = 0;
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

while (true) {
  const check = [...Array(n)].map(_ => new Array(n).fill(0));
  let flag = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!check[i][j]) {
        const queue = [[i, j]];
        const visit = [[i, j]];
        let cnt = 1;
        let union = input[i][j];
        check[i][j] = 1;
        while (queue.length) {
          const [x, y] = queue.pop();

          for (let k = 0; k < 4; k++) {
            const xx = x + dx[k];
            const yy = y + dy[k];

            if (xx >= 0 && xx < n && y >= 0 && y < n) {
              const compare = Math.abs(input[x][y] - input[xx][yy]);
              if (compare >= l && compare <= r && !check[xx][yy]) {
                queue.push([xx, yy]);
                visit.push([xx, yy]);
                cnt++;
                union += input[xx][yy];
                check[xx][yy] = 1;
              }
            }
          }
        }
        const afterPopulation = Math.floor(union / cnt);
        let doneCheck = 0;
        if (cnt > 1) {
          for (const [x, y] of visit) {
            if (input[x][y] !== afterPopulation) input[x][y] = afterPopulation;
            else doneCheck++;
          }
        } else check[i][j] = 0;
        flag = doneCheck === cnt ? flag : flag + cnt - 1;
      }
    }
  }
  if (!flag) break;
  answer++;
}
console.log(answer);

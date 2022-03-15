const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/7569.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input.map(item => item.split(' ').map(Number));

const [m, n, h] = input[0];
let answer = 0;
let totalTomaot = 0;
let queue = [];
const tomato = [];

for (let i = 1; i < n * h + 1; i += n) {
  const temp = [];
  for (let j = i; j < i + n; j++) {
    temp.push(input[j]);
    for (let z = 0; z < m; z++) {
      if (input[j][z] === 0) totalTomaot++;
      else if (input[j][z] === 1) queue.push([tomato.length, temp.length - 1, z]);
    }
  }
  tomato.push(temp);
}

const dx = [-1, 0, 1, 0, 0, 0];
const dy = [0, 1, 0, -1, 0, 0];
const dz = [0, 0, 0, 0, -1, 1];

const bfs = () => {
  while (queue.length) {
    const len = queue.length;
    const temp = [];

    for (let i = 0; i < len; i++) {
      const [z, x, y] = queue.pop();
      for (let k = 0; k < 6; k++) {
        const xx = x + dx[k];
        const yy = y + dy[k];
        const zz = z + dz[k];
        if (xx >= 0 && xx < n && yy >= 0 && yy < m && zz >= 0 && zz < h) {
          if (!tomato[zz][xx][yy]) {
            tomato[zz][xx][yy] = 1;
            temp.push([zz, xx, yy]);
            totalTomaot--;
          }
        }
      }
    }
    queue = [...temp];
    answer++;
  }
};

bfs();
console.log(totalTomaot ? -1 : answer - 1);

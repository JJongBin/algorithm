const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/18428.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input.shift();
input = input.map(item => item.split(' '));

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
let answer = 'NO';

const checkWall = [...Array(n)].map(_ => new Array(n).fill(0));

const teacher = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (input[i][j] === 'T') teacher.push([i, j]);
  }
}

const checkStu = () => {
  for (let i = 0; i < teacher.length; i++) {
    for (let k = 0; k < 4; k++) {
      let x = teacher[i][0] + dx[k];
      let y = teacher[i][1] + dy[k];
      while (x >= 0 && x < n && y >= 0 && y < n) {
        if (x >= 0 && x < n && y >= 0 && y < n) {
          if (input[x][y] === 'O') break;
          else if (input[x][y] === 'S') return false;
        }
        x = x + dx[k];
        y = y + dy[k];
      }
    }
  }
  return true;
};

const wall = (input, checkWall, cnt) => {
  if (cnt === 3) {
    if (checkStu()) answer = 'YES';
    return;
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!checkWall[i][j] && input[i][j] === 'X') {
        checkWall[i][j] = 1;
        input[i][j] = 'O';
        wall(input, checkWall, cnt + 1);
        input[i][j] = 'X';
        checkWall[i][j] = 0;
      }
    }
  }
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (input[i][j] === 'X') wall(input, checkWall, 0);
  }
}

console.log(answer);

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/1347.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');
const n = +input.shift();

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
const miro = [...Array(101)].map(_ => new Array(101).fill('#'));

let checkX = [50, 50];
let checkY = [50, 50];
let x = 50;
let y = 50;
let direction = 2;
for (const path of input[0]) {
  miro[x][y] = '.';
  if (path === 'F') {
    x += dx[direction];
    y += dy[direction];
    miro[x][y] = '.';
    checkX[0] = Math.min(checkX[0], x);
    checkX[1] = Math.max(checkX[1], x);
    checkY[0] = Math.min(checkY[0], y);
    checkY[1] = Math.max(checkY[1], y);
  } else if (path === 'L') direction = direction - 1 < 0 ? 3 : direction - 1;
  else direction = direction + 1 > 3 ? 0 : direction + 1;
}

for (let i = checkX[0]; i <= checkX[1]; i++) {
  let answer = '';
  for (let j = checkY[0]; j <= checkY[1]; j++) answer += miro[i][j];
  console.log(answer);
}

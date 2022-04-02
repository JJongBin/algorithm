const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'testcase/14499.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input.map(item => item.split(' ').map(Number));

const [n, m, x, y, k] = input.shift();
const map = input.slice(0, n);
const commands = input[input.length - 1];
const directions = {
  1: [0, 1],
  2: [0, -1],
  3: [-1, 0],
  4: [1, 0],
};

let dice = [map[x][y], 0, 0, 0, 0, 0];
let posX = x;
let posY = y;
const answer = [];

const dicer = direction => {
  if (direction === 1) dice = [dice[2], dice[1], dice[5], dice[3], dice[0], dice[4]];
  else if (direction === 2) dice = [dice[4], dice[1], dice[0], dice[3], dice[5], dice[2]];
  else if (direction === 3) dice = [dice[3], dice[0], dice[2], dice[5], dice[4], dice[1]];
  else if (direction === 4) dice = [dice[1], dice[5], dice[2], dice[0], dice[4], dice[3]];
};

for (const command of commands) {
  const direction = directions[command];
  const xx = posX + direction[0];
  const yy = posY + direction[1];

  if (!(xx >= 0 && xx < n && yy >= 0 && yy < m)) continue;
  dicer(command);
  posX = xx;
  posY = yy;

  if (map[posX][posY]) {
    dice[0] = map[posX][posY];
    map[posX][posY] = 0;
  } else map[posX][posY] = dice[0];

  answer.push(dice[5]);
}
console.log(answer.join('\n'));

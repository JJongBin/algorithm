const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/19236.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input.map(item => item.split(' ').map(Number));

const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
const dy = [0, -1, -1, -1, 0, 1, 1, 1];

const board = [...Array(4)].map(_ => new Array(4).fill(0));
const fishPos = new Array(17).fill(new Array(2).fill(0));

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 8; j++) {
    board[i][j / 2] = [input[i][j], input[i][j + 1] - 1];
    fishPos[input[i][j]] = [i, j / 2];
    j++;
  }
}

let shakeDirection = board[0][0][1];
let sum = board[0][0][0];
let answer = 0;
board[0][0][1] = null;

const moveFish = (inBoard, inFishPos, shakeX, shakeY) => {
  const moveNewBoard = inBoard.map(item => [...item].map(item2 => [...item2]));
  const moveNewFishPos = inFishPos.map(item => [...item]);

  for (let i = 1; i < 17; i++) {
    const [x, y] = moveNewFishPos[i];
    if (moveNewBoard[x][y][1] === null) continue;
    const direction = moveNewBoard[x][y][1];

    for (let k = 0; k < 8; k++) {
      const changeDirection = direction + k > 7 ? direction + k - 8 : direction + k;
      const xx = x + dx[changeDirection];
      const yy = y + dy[changeDirection];
      if (xx >= 0 && xx < 4 && yy >= 0 && yy < 4) {
        if (xx === shakeX && yy === shakeY) continue;
        let temp = [moveNewBoard[x][y][0], changeDirection];
        moveNewBoard[x][y] = [...moveNewBoard[xx][yy]];
        moveNewBoard[xx][yy] = temp;

        let temp2 = moveNewFishPos[moveNewBoard[x][y][0]];
        moveNewFishPos[moveNewBoard[x][y][0]] = moveNewFishPos[moveNewBoard[xx][yy][0]];
        moveNewFishPos[moveNewBoard[xx][yy][0]] = temp2;
        break;
      }
    }
  }
  return [moveNewBoard, moveNewFishPos];
};

const dfs = (shakeX, shakeY, shakeD, sum, inBoard, inFishPos, d) => {
  const [nowBoard, nowFishPos] = moveFish(inBoard, inFishPos, shakeX, shakeY);

  while (true) {
    shakeX = shakeX + dx[shakeD];
    shakeY = shakeY + dy[shakeD];

    if (shakeX >= 0 && shakeX < 4 && shakeY >= 0 && shakeY < 4) {
      if (nowBoard[shakeX][shakeY][1] !== null) {
        const temp = [...nowBoard[shakeX][shakeY]];
        nowBoard[shakeX][shakeY][1] = null;
        dfs(shakeX, shakeY, temp[1], sum + temp[0], nowBoard, nowFishPos, d + 1);
        nowBoard[shakeX][shakeY][1] = temp[1];
      }
    } else break;
  }
  answer = Math.max(sum, answer);
  return;
};

dfs(0, 0, shakeDirection, sum, board, fishPos, 0);
console.log(answer);

const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : './testcase/2578.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input.map(item => item.split(' ').map(Number));

const board = input.slice(0, 5);
const hash = new Set();

const checkBingo = () => {
  let bingo = 0;
  let diagonal1 = 0;
  let diagonal2 = 0;
  for (let i = 0; i < 5; i++) {
    let row = 0;
    let col = 0;
    for (let j = 0; j < 5; j++) {
      if (i + j === 4 && hash.has(board[i][j])) diagonal2++;
      if (i === j && hash.has(board[i][j])) diagonal1++;
      if (hash.has(board[i][j])) row++;
      if (hash.has(board[j][i])) col++;
    }
    if (row === 5) bingo++;
    if (col === 5) bingo++;
  }
  if (diagonal1 === 5) bingo++;
  if (diagonal2 === 5) bingo++;

  return bingo >= 3 ? true : false;
};

let answer = 0;
outer: for (let i = 5; i < 10; i++) {
  for (let j = 0; j < 5; j++) {
    hash.add(input[i][j]);
    answer++;
    if (checkBingo()) break outer;
  }
}
console.log(answer);

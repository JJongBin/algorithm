const fs = require('fs');
const { join } = require('path');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/14502.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input
  .shift()
  .split(' ')
  .map(item => +item);

const arr = [];
for (let i = 0; i < n; i++) {
  arr[i] = input[i].split(' ').map(item => +item);
}

let answer = 0;

const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

const dfs = arr => {
  const arrCopy = arr.map(item => [...item]);
  const stack = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arrCopy[i][j] === 2) stack.push([i, j]);
    }
  }

  while (stack.length) {
    const [x, y] = stack.pop();
    arrCopy[x][y] = 2;

    for (let k = 0; k < 4; k++) {
      const xx = x + dx[k];
      const yy = y + dy[k];
      if (xx >= 0 && xx < n && yy >= 0 && yy < m) {
        if (arrCopy[xx][yy] === 0) {
          stack.push([xx, yy]);
        }
      }
    }
  }

  let cnt = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arrCopy[i][j] === 0) cnt++;
    }
  }
  // if (cnt === 12) {
  //   console.log();
  //   for (let test of arrCopy) {
  //     console.log(test.join(''));
  //   }
  // }
  return cnt;
};

const wall = wallCnt => {
  if (wallCnt === 3) {
    let temp = dfs(arr);
    answer = Math.max(answer, temp);

    return;
  } else {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (arr[i][j] === 0) {
          arr[i][j] = 1;
          wall(wallCnt + 1);
          arr[i][j] = 0;
        }
      }
    }
  }
};

wall(0);
// console.log(arr);
console.log(answer);

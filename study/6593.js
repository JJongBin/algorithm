const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/6593.txt';

let inputs = fs.readFileSync(filePath).toString().trim().split('\n');

const dx = [-1, 0, 1, 0, 0, 0];
const dy = [0, 1, 0, -1, 0, 0];
const dz = [0, 0, 0, 0, -1, 1];

const bfs = (board, L, R, C) => {
  const check = [...new Array(L)].map(_ => [...new Array(R)].map(_ => new Array(C).fill(0)));
  let start;
  outer: for (let i = 0; i < L; i++) {
    for (let j = 0; j < R; j++) {
      for (let k = 0; k < C; k++) {
        if (board[i][j][k] === 'S') {
          start = [i, j, k];
          break outer;
        }
      }
    }
  }
  const queue = [start];
  let cnt = 0;
  check[start[0]][start[1]][start[2]] = 1;

  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const [z, x, y] = queue.shift();
      for (let k = 0; k < 6; k++) {
        const zz = z + dz[k];
        const xx = x + dx[k];
        const yy = y + dy[k];

        if (zz < 0 || zz >= L || xx < 0 || xx >= R || yy < 0 || yy >= C) continue;
        if (board[zz][xx][yy] === '#') continue;
        if (check[zz][xx][yy]) continue;
        if (board[zz][xx][yy] === 'E') return cnt + 1;

        check[zz][xx][yy] = 1;
        queue.push([zz, xx, yy]);
      }
    }
    cnt += 1;
  }
  return 0;
};

let map = [];
let tempArr = [];
let L, R, C;
for (const input of inputs) {
  const temp = input.split(' ').map(Number);
  if (temp.length >= 3) {
    if (map.length) {
      const res = bfs(map, L, R, C);
      console.log(res ? `Escaped in ${res} minute(s).` : 'Trapped!');
    }
    [L, R, C] = temp;
    map = [];
  } else {
    if (!input) {
      map.push([...tempArr]);
      tempArr = [];
    } else {
      tempArr.push(input);
    }
  }
}

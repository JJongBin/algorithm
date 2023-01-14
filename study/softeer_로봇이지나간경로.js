const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
let h, w;
let target = 0;
const answer = [Infinity, '', [0, 0, 0]];
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
const direct = {
  0: '^',
  1: '>',
  2: 'v',
  3: '<',
};

const checkMap = (x, y, check) => {
  if (0 > x || h <= x || 0 > y || w <= y) return false;
  if (input[x][y] !== '#') return false;
  if (check[x][y]) return false;

  return true;
};

const dfs = (start, x, y, k, check, cnt, path) => {
  const x1 = x + dx[k];
  const y1 = y + dy[k];
  if (!checkMap(x1, y1, check)) return;

  const x2 = x1 + dx[k];
  const y2 = y1 + dy[k];
  if (!checkMap(x2, y2, check)) return;

  check[x1][y1] = 1;
  check[x2][y2] = 1;
  cnt += 2;
  path.push('A');

  if (cnt === target) {
    if (answer[0] < path.length) return;

    answer[0] = path.length;
    answer[1] = path.join('');
    answer[2] = start;
  } else {
    for (let r = 0; r < 4; r++) {
      if (r === 2) continue;

      const dir = k + r >= 4 ? k + r - 4 : k + r;
      if (r === 3) path.push('L');
      else if (r === 1) path.push('R');

      dfs(start, x2, y2, dir, check, cnt, path);

      check[x1][y1] = 0;
      check[x2][y2] = 0;

      if (r) path.pop();
    }
  }
};

const solve = () => {
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (input[i][j] === '#') target++;
    }
  }

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (input[i][j] !== '#') continue;

      for (let k = 0; k < 4; k++) {
        const check = [...Array(h)].map(_ => new Array(w).fill(0));
        check[i][j] = 1;
        dfs([i, j, k], i, j, k, check, 1, []);
      }
    }
  }

  console.log(`${answer[2][0] + 1} ${answer[2][1] + 1}`);
  console.log(direct[answer[2][2]]);
  console.log(answer[1]);
};

rl.on('line', line => {
  if (!h || !w) {
    const [hh, ww] = line.split(' ').map(Number);
    h = hh;
    w = ww;
  } else {
    input.push(line);
    if (input.length >= h) solve();
  }
});

function solution(grid) {
  var answer = [];

  const col = grid.length;
  const row = grid[0].length;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const check = [...Array(col)].map(_ => [...Array(row)].map(_ => new Array(4).fill(0)));

  const moveLight = (x, y, dir) => {
    let cnt = 0;
    let startX = x;
    let startY = y;
    let startDir = dir;
    while (true) {
      check[x][y][dir] = 1;
      cnt++;
      x = x + dx[dir] < 0 ? col - 1 : x + dx[dir] >= col ? 0 : x + dx[dir];
      y = y + dy[dir] < 0 ? row - 1 : y + dy[dir] >= row ? 0 : y + dy[dir];
      if (grid[x][y] === 'L') dir = dir - 1 < 0 ? 3 : dir - 1;
      else if (grid[x][y] === 'R') dir = dir + 1 > 3 ? 0 : dir + 1;

      if (x === startX && y === startY && dir === startDir) break;
    }

    answer.push(cnt);
    return;
  };

  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      for (let k = 0; k < 4; k++) {
        if (!check[i][j][k]) moveLight(i, j, k);
      }
    }
  }

  return answer.sort((a, b) => a - b);
}
console.log(solution(['SL', 'LR']));
console.log(solution(['S']));
console.log(solution(['R', 'R']));

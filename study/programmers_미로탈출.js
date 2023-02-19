function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  const bfs = (start, end) => {
    let cnt = 0;
    const queue = [start];
    const check = [...Array(n)].map(_ => new Array(m).fill(0));
    const [endX, endY] = end;

    while (queue.length) {
      const len = queue.length;
      for (let i = 0; i < len; i++) {
        const [x, y] = queue.shift();
        for (let k = 0; k < 4; k++) {
          const xx = x + dx[k];
          const yy = y + dy[k];

          if (xx < 0 || xx >= n || yy < 0 || yy >= m) continue;
          if (check[xx][yy]) continue;
          if (maps[xx][yy] === 'X') continue;

          if (xx === endX && yy === endY) return cnt + 1;
          check[xx][yy] = 1;
          queue.push([xx, yy]);
        }
      }

      cnt += 1;
    }

    return 0;
  };

  let start = [0, 0];
  let lever = [0, 0];
  let end = [0, 0];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (maps[i][j] === 'S') start = [i, j];
      else if (maps[i][j] === 'L') lever = [i, j];
      else if (maps[i][j] === 'E') end = [i, j];
    }
  }

  const cnt1 = bfs(start, lever);
  if (!cnt1) return -1;

  const cnt2 = bfs(lever, end);
  if (!cnt2) return -1;

  return cnt1 + cnt2;
}

console.log(solution(['SOOOL', 'XXXXO', 'OOOOO', 'OXXXX', 'OOOOE']));

function solution(maps) {
  var answer = [];

  const n = maps.length;
  const m = maps[0].length;

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const check = [...Array(n)].map(_ => new Array(m).fill(0));

  const dfs = (i, j) => {
    const queue = [[i, j]];
    check[i][j] = 1;
    let cnt = 0;

    while (queue.length) {
      const [x, y] = queue.pop();
      cnt += +maps[x][y];

      for (let k = 0; k < 4; k++) {
        const xx = x + dx[k];
        const yy = y + dy[k];

        if (xx < 0 || xx >= n || yy < 0 || yy >= m) continue;
        if (check[xx][yy]) continue;
        if (maps[xx][yy] === 'X') continue;

        queue.push([xx, yy]);
        check[xx][yy] = 1;
      }
    }

    return cnt;
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!check[i][j] && maps[i][j] !== 'X') {
        const cnt = dfs(i, j);
        answer.push(cnt);
      }
    }
  }

  answer.sort((a, b) => a - b);
  return answer.length ? answer : [-1];
}

console.log(solution(['X591X', 'X1X5X', 'X231X', '1XXX1']));

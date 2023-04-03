function solution(n, m, a) {
  var answer = 0;

  const dx = [0, 1, 0];
  const dy = [-1, 0, 1];

  const checkDx = [-1, 0, 1, 0];
  const checkDy = [0, 1, 0, -1];

  const check = [...Array(n)].map(_ => new Array(m).fill(0));

  const dfs = (x, y, value) => {
    if (x === n - 1) {
      answer = Math.max(answer, value);
    }

    for (let k = 0; k < 3; k++) {
      const xx = x + dx[k];
      const yy = y + dy[k];

      if (xx < 0 || xx >= n || yy < 0 || yy >= m) continue;
      if (check[xx][yy]) continue;

      let cnt = 0;
      for (let kk = 0; kk < 4; kk++) {
        const xxx = xx + checkDx[kk];
        const yyy = yy + checkDy[kk];
        if (xxx < 0 || xxx >= n || yyy < 0 || yyy >= m) continue;
        if (check[xxx][yyy]) cnt += 1;
      }

      if (cnt >= 2) continue;

      check[xx][yy] = 1;
      dfs(xx, yy, value + a[xx][yy]);
      check[xx][yy] = 0;
    }
  };

  for (let i = 0; i < n; i++) {
    check[0][i] = 1;
    dfs(0, i, a[0][i]);
    check[0][i] = 0;
  }

  return answer;
}

console.log(
  solution(3, 3, [
    [1, 4, 5],
    [3, 8, 2],
    [10, 0, 6],
  ])
);
console.log(
  solution(2, 2, [
    [10, 10],
    [10, 10],
  ])
);

console.log(solution(1, 2, [[0, 0]]));

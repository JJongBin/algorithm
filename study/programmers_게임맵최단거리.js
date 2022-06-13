function solution(maps) {
  var answer = 0;
  const n = maps.length;
  const m = maps[0].length;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  const bfs = () => {
    let cnt = 1;
    const queue = [[0, 0]];
    const check = [...Array(n)].map(_ => new Array(m).fill(0));
    check[0][0] = 1;

    while (queue.length) {
      const len = queue.length;
      for (let i = 0; i < len; i++) {
        const [x, y] = queue.shift();
        for (let k = 0; k < 4; k++) {
          const nextX = x + dx[k];
          const nextY = y + dy[k];

          if (nextX >= 0 && nextX < n && nextY >= 0 && nextY < m) {
            if (check[nextX][nextY]) continue;
            if (!maps[nextX][nextY]) continue;
            if (nextX === n - 1 && nextY === m - 1) return cnt + 1;
            check[nextX][nextY] = 1;
            queue.push([nextX, nextY]);
          }
        }
      }
      cnt++;
    }
    return -1;
  };

  answer = bfs();
  return answer;
}
console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);
console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
  ])
);

function solution(bombs) {
  var answer = 0;
  const len = bombs.length;

  const dfs = idx => {
    let cnt = 1;
    const check = new Array(len);
    check[idx] = 1;
    const queue = [idx];
    while (queue.length) {
      const [x, y, z] = bombs[queue.pop()];
      for (let k = 0; k < len; k++) {
        if (check[k]) continue;
        const [xx, yy, zz] = bombs[k];
        const dist = Math.sqrt(Math.abs(x - xx) ** 2 + Math.abs(y - yy) ** 2);
        if (dist <= z) {
          check[k] = 1;
          queue.push(k);
          cnt++;
        }
      }
    }
    return cnt;
  };

  for (let i = 0; i < len; i++) {
    const cnt = dfs(i);
    answer = Math.max(answer, cnt);
  }

  return answer;
}
console.log(
  solution([
    [1, 2, 3],
    [2, 3, 1],
    [3, 4, 2],
    [4, 5, 3],
    [5, 6, 4],
  ])
);
console.log(
  solution([
    [2, 1, 3],
    [6, 1, 4],
  ])
);
console.log(
  solution([
    [1, 1, 5],
    [10, 10, 5],
  ])
);
console.log(
  solution([
    [1, 2, 3],
    [2, 3, 1],
    [3, 4, 2],
    [12, 15, 1],
    [17, 19, 1],
  ])
);

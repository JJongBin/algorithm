function solution(n, m, x, y, queries) {
  var answer = -1;

  let minX = BigInt(x),
    maxX = BigInt(x),
    minY = BigInt(y),
    maxY = BigInt(y);

  queries.reverse();
  for (const query of queries) {
    let [dist, cnt] = query;
    cnt = BigInt(cnt);

    if (dist === 0) {
      if (minY !== 0n) minY = minY + cnt;
      maxY = maxY + cnt;
    } else if (dist === 1) {
      if (maxY !== BigInt(m - 1)) maxY = maxY - cnt;
      minY = minY - cnt;
    } else if (dist === 2) {
      if (minX !== 0n) minX = minX + cnt;
      maxX = maxX + cnt;
    } else if (dist === 3) {
      if (maxX !== BigInt(n - 1)) maxX = maxX - cnt;
      minX = minX - cnt;
    }

    if (maxX < 0 || maxY < 0 || minX >= n || minY >= m) return 0;
    minX = minX < 0n ? 0n : minX;
    maxX = maxX >= BigInt(n) ? BigInt(n - 1) : maxX;
    minY = minY < 0n ? 0n : minY;
    maxY = maxY >= BigInt(m) ? BigInt(m - 1) : maxY;
  }

  answer = (maxX - minX + 1n) * (maxY - minY + 1n);

  return answer;
}

console.log(
  solution(2, 5, 0, 1, [
    [3, 1],
    [2, 2],
    [1, 1],
    [2, 3],
    [0, 1],
    [2, 1],
  ])
);

console.log(
  solution(2, 2, 0, 0, [
    [2, 1],
    [0, 1],
    [1, 1],
    [0, 1],
    [2, 1],
  ])
);

console.log(
  solution(3, 3, 1, 1, [
    [0, 10],
    [2, 10],
  ])
);

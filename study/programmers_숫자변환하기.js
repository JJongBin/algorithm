function solution(x, y, n) {
  var answer = 0;
  const check = new Array(1000001).fill(0);
  const queue = [[x, 0]];

  if (x === y) return 0;

  let idx = 0;
  while (queue[idx]) {
    const [num, cnt] = queue[idx];
    idx += 1;

    for (const nextNum of [num + n, num * 2, num * 3]) {
      if (check[nextNum]) continue;
      if (nextNum > y) continue;

      if (nextNum === y) return cnt + 1;

      check[nextNum] = 1;
      queue.push([nextNum, cnt + 1]);
    }
  }

  return -1;
}

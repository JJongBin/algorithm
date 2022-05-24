var findCheapestPrice = function (n, flights, src, dst, k) {
  const graph = {};
  const check = new Array(n).fill(-1);

  for (const [x, y, z] of flights) graph[x] = graph[x] ? [...graph[x], [y, z]] : [[y, z]];

  const queue = [[src, 0]];
  check[src] = 0;
  let cnt = 0;
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const [now, nowCost] = queue.shift();
      if (!graph[now]) continue;
      for (const [next, nextCost] of [...graph[now]]) {
        const calcCost = nowCost + nextCost;

        if (check[next] === -1 || calcCost < check[next]) {
          check[next] = calcCost;
          queue.push([next, calcCost]);
        }
      }
    }
    cnt++;
    if (cnt > k) break;
  }

  return check[dst];
};

console.log(
  findCheapestPrice(
    4,
    [
      [0, 1, 100],
      [1, 2, 100],
      [2, 0, 100],
      [1, 3, 600],
      [2, 3, 200],
    ],
    0,
    3,
    1
  )
);

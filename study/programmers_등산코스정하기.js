function solution(n, paths, gates, summits) {
  var answer = [0, Infinity];

  const graph = {};
  for (const path of paths) {
    const [n1, n2, w] = path;
    if (graph[n1]) graph[n1].push([n2, w]);
    else graph[n1] = [[n2, w]];
    if (graph[n2]) graph[n2].push([n1, w]);
    else graph[n2] = [[n1, w]];
  }

  const summitsCheck = new Set();
  for (const summit of summits) summitsCheck.add(summit);

  const queue = gates.map(gate => [gate, 0]);

  const check = new Array(n + 1).fill(Infinity);
  while (queue.length) {
    const [node, min] = queue.shift();
    for (const [next, w] of graph[node]) {
      if (check[next] <= w) continue;
      if (check[next] <= min) continue;
      check[next] = Math.max(w, min);

      if (summitsCheck.has(next)) continue;
      queue.push([next, check[next]]);
    }
  }

  summits.sort((a, b) => a - b);
  for (const summit of summits) {
    if (answer[1] > check[summit]) {
      answer = [summit, check[summit]];
    }
  }

  return answer;
}

console.log(
  solution(
    6,
    [
      [1, 2, 3],
      [2, 3, 5],
      [2, 4, 2],
      [2, 5, 4],
      [3, 4, 4],
      [4, 5, 3],
      [4, 6, 1],
      [5, 6, 1],
    ],
    [1, 3],
    [5]
  )
);

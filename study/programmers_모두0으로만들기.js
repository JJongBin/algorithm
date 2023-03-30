function solution(a, edges) {
  var answer = 0n;

  const graph = {};
  for (const [e1, e2] of edges) {
    if (graph[e1]) graph[e1].push(e2);
    else graph[e1] = [e2];
    if (graph[e2]) graph[e2].push(e1);
    else graph[e2] = [e1];
  }

  const queue = [[0, 0]];
  const check = new Array(a.length).fill(0);

  while (queue.length) {
    const [edge, parent] = queue.pop();

    if (check[edge]) {
      a[parent] += a[edge];
      answer += BigInt(Math.abs(a[edge]));
      continue;
    }

    queue.push([edge, parent]);
    check[edge] = 1;

    for (const next of graph[edge]) {
      if (check[next]) continue;
      queue.push([next, edge]);
    }
  }

  return a[0] ? -1 : answer;
}

console.log(
  solution(
    [-5, 0, 2, 1, 2],
    [
      [0, 1],
      [3, 4],
      [2, 3],
      [0, 3],
    ]
  )
);

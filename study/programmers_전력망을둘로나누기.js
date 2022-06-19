function solution(n, wires) {
  var answer = Infinity;
  const graph = new Map();
  for (const wire of wires) {
    const [x, y] = wire;
    if (!graph[x]) graph[x] = new Set();
    graph[x].add(y);

    if (!graph[y]) graph[y] = new Set();
    graph[y].add(x);
  }

  const checkInclude = (point, check) => {
    for (const p of graph[point]) {
      if (check.has(p)) continue;
      check.add(p);
      checkInclude(p, check);
    }
  };

  for (const wire of wires) {
    const [x, y] = wire;

    const check1 = new Set();
    check1.add(x);
    const check2 = new Set();
    check2.add(y);

    graph[x].delete(y);
    graph[y].delete(x);

    checkInclude(x, check1);
    if (check1.has(y)) {
      graph[x].add(y);
      graph[y].add(x);
      continue;
    }

    checkInclude(y, check2);
    graph[x].add(y);
    graph[y].add(x);

    answer = Math.min(answer, Math.abs(check1.size - check2.size));
  }
  return answer;
}
console.log(
  solution(9, [
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [7, 8],
    [7, 9],
  ])
);
console.log(
  solution(3, [
    [1, 2],
    [2, 3],
  ])
);

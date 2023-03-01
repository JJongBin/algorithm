function solution(n, roads, sources, destination) {
  var answer = [];

  const graph = {};

  for (const road of roads) {
    const [start, end] = road;
    if (graph[start]) graph[start].push(end);
    else graph[start] = [end];
    if (graph[end]) graph[end].push(start);
    else graph[end] = [start];
  }

  const queue = [destination];
  const sourcesArr = new Array(100000).fill(-1);
  const check = new Array(100000).fill(0);
  let dist = 1;

  sourcesArr[destination] = 0;
  check[destination] = 1;

  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const area = queue.shift();
      if (!graph[area]) continue;

      for (const nextArea of graph[area]) {
        if (check[nextArea]) continue;
        sourcesArr[nextArea] = dist;
        check[nextArea] = 1;
        queue.push(nextArea);
      }
    }
    dist++;
  }

  for (const source of sources) {
    answer.push(sourcesArr[source]);
  }

  return answer;
}

console.log(
  solution(
    3,
    [
      [1, 2],
      [2, 3],
    ],
    [2, 3],
    1
  )
);

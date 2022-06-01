function solution(info, edges) {
  var answer = 0;
  const len = info.length;
  const graph = {};

  for (const e of edges) graph[e[0]] = graph[e[0]] ? [...graph[e[0]], e[1]] : [e[1]];

  const check = new Array(len).fill(0);
  check[0] = 1;

  const dfs = (sheep, wolf, next) => {
    answer = Math.max(sheep, answer);

    if (sheep <= wolf) return;
    else {
      for (const n of next) {
        if (check[n]) continue;
        check[n] = 1;
        if (info[n]) dfs(sheep, wolf + 1, [...next, ...(graph[n] ? graph[n] : [])]);
        else dfs(sheep + 1, wolf, [...next, ...(graph[n] ? graph[n] : [])]);
        check[n] = 0;
      }
    }
  };

  dfs(1, 0, graph[0]);

  return answer;
}
console.log(
  solution(
    [0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1],
    [
      [0, 1],
      [1, 2],
      [1, 4],
      [0, 8],
      [8, 7],
      [9, 10],
      [9, 11],
      [4, 3],
      [6, 5],
      [4, 6],
      [8, 9],
    ]
  )
);
console.log(
  solution(
    [0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
    [
      [0, 1],
      [0, 2],
      [1, 3],
      [1, 4],
      [2, 5],
      [2, 6],
      [3, 7],
      [4, 8],
      [6, 9],
      [9, 10],
    ]
  )
);

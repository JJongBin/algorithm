function solution(tickets) {
  var answer = [];
  const len = tickets.length;

  const graph = {};
  for (const ticket of tickets) {
    const [start, end] = ticket;
    if (!graph[start]) graph[start] = [end];
    else graph[start].push(end);
  }

  const check = {};
  for (const key of Object.keys(graph)) {
    graph[key].sort();
    check[key] = new Array(graph[key].length).fill(0);
  }

  const path = ['ICN'];
  let isFinish = false;
  const dfs = (city, cnt) => {
    if (!graph[city]) return; // 없을 수 있는데 for문을 돌려서 런타임에러

    for (let i = 0; i < graph[city].length; i++) {
      if (isFinish) return;

      if (!check[city][i]) {
        path.push(graph[city][i]);
        check[city][i] = 1;
        cnt += 1;

        if (cnt === len) {
          isFinish = true;
          answer = [...path];
          return;
        }

        dfs(graph[city][i], cnt);

        cnt -= 1;
        check[city][i] = 0;
        path.pop();
      }
    }
  };

  dfs('ICN', 0);

  return answer;
}

console.log(
  solution([
    ['ICN', 'JFK'],
    ['HND', 'IAD'],
    ['JFK', 'HND'],
  ])
);

console.log(
  solution([
    ['ICN', 'JFK'],
    ['JFK', 'ICN'],
    ['ICN', 'JFK'],
    ['JFK', 'ICN'],
    ['ICN', 'JFK'],
    ['JFK', 'ICN'],
    ['ICN', 'JFK'],
  ])
);

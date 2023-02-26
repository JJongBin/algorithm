function solution(routes) {
  var answer = 0;
  let compare = -30000;

  routes.sort((a, b) => a[1] - b[1]);

  for (const route of routes) {
    const [start, end] = route;

    if (compare < start) {
      answer += 1;
      compare = end;
    }
  }

  return answer;
}

console.log(
  solution([
    [-20, -15],
    [-14, -5],
    [-18, -13],
    [-5, -3],
  ])
);

function solution(n, costs) {
  var answer = 0;

  const unf = Array.from({ length: n }, (_, i) => i);
  costs.sort((a, b) => a[2] - b[2]);

  const Find = v => {
    if (v === unf[v]) return v;
    else return (unf[v] = Find(unf[v]));
  };

  const Union = (a, b) => {
    let fa = Find(a);
    let fb = Find(b);
    if (fa !== fb) {
      unf[fa] = fb;
      return true;
    } else return false;
  };

  for (const [island1, island2, cost] of costs) {
    const check = Union(island1, island2);
    if (check) answer += cost;
  }

  return answer;
}

console.log(
  solution(4, [
    [0, 1, 1],
    [0, 2, 2],
    [1, 2, 5],
    [1, 3, 1],
    [2, 3, 8],
  ])
);

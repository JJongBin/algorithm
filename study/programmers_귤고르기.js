function solution(k, tangerine) {
  var answer = 0;

  const hash = new Map();

  for (const size of tangerine) {
    hash.set(size, (hash.get(size) || 0) + 1);
  }

  const val = [...hash.values()].sort((a, b) => b - a);

  for (const v of val) {
    answer++;
    k -= v;
    if (k <= 0) break;
  }

  return answer;
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]));

function solution(X, Y) {
  var answer = '';

  const hash1 = new Map();
  const hash2 = new Map();

  for (const n of X) hash1.set(n, (hash1.get(n) || 0) + 1);
  for (const n of Y) hash2.set(n, (hash2.get(n) || 0) + 1);

  const sortedHash1arr = [...hash1.entries()].sort((a, b) => b[0] - a[0]);
  for (const [k, v] of sortedHash1arr) {
    if (!hash2.get(k)) continue;
    answer += k.repeat(Math.min(v, hash2.get(k)));
  }

  return answer ? String(+answer) : '-1';
}

console.log(solution('12321', '42531'));

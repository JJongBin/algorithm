function solution(s) {
  var answer = [];
  const ss = s
    .split('},{')
    .map(item =>
      item
        .replace(/[}{}]+/g, '')
        .split(',')
        .map(Number)
    )
    .sort((a, b) => a.length - b.length);

  if (ss.length === 1) return [Number(s.replace(/[}{}]+/g, ''))];

  let hash1 = new Map();
  for (const arr of ss) {
    const hash2 = new Map();
    for (const n of arr) {
      if (hash1.has(n)) hash1.set(n, hash1.get(n) - 1);
      else answer.push(n);
      hash2.set(n, (hash2.get(n) || 0) + 1);
    }
    hash1 = hash2;
  }

  return answer;
}
console.log(solution('{{2},{2,1},{2,1,3},{2,1,3,4}}'));
console.log(solution('{{1,2,3},{2,1},{1,2,4,3},{2}}'));
console.log(solution('{{20,111},{111}}'));
console.log(solution('{{111}}'));
console.log(solution('{{4,2,3},{3},{2,3,4,1},{2,3}}'));

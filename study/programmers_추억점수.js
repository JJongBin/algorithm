function solution(name, yearning, photo) {
  var answer = [];

  const scores = {};
  for (let i = 0; i < name.length; i++) scores[name[i]] = yearning[i];

  for (const p of photo) {
    let score = p.reduce((s, name) => (scores[name] ? s + scores[name] : s), 0);
    answer.push(score);
  }

  return answer;
}
console.log(
  solution(
    ['may', 'kein', 'kain', 'radi'],
    [5, 10, 1, 3],
    [
      ['may', 'kein', 'kain', 'radi'],
      ['may', 'kein', 'brin', 'deny'],
      ['kon', 'kain', 'may', 'coni'],
    ]
  )
);

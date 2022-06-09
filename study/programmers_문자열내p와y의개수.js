function solution(s) {
  const p = s.match(/p/gi) || [];
  const y = s.match(/y/gi) || [];

  return p.length === y.length ? true : false;
}
console.log(solution('oooyY'));

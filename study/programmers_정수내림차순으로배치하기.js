function solution(n) {
  return +(n + '')
    .split('')
    .map(Number)
    .sort((a, b) => b - a)
    .join('');
}
console.log(solution(12345));

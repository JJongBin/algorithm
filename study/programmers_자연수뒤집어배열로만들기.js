function solution(n) {
  return (n + '').split('').reverse().map(Number);
}
console.log(solution(12345));

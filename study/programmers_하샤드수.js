function solution(x) {
  return x % (x + '').split('').reduce((a, b) => +a + +b) ? false : true;
}
console.log(solution(10));

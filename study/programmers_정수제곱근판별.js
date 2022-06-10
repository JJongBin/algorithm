function solution(n) {
  const check = Math.sqrt(n);
  return Number.isInteger(check) ? (check + 1) ** 2 : -1;
}
console.log(solution(121));

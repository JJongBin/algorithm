function solution(n) {
  const check = new Array(n + 1).fill(0);
  check[0] = 0;
  check[1] = 1;
  for (let i = 2; i < n + 1; i++) check[i] = (check[i - 2] + check[i - 1]) % 1234567;

  return check[n];
}
console.log(solution(10));

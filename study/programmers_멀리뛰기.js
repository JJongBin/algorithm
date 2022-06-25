function solution(n) {
  const check = new Array(n + 1).fill(0);
  check[1] = 1;
  check[2] = 2;

  for (let i = 3; i < n + 1; i++) check[i] = (check[i - 1] + check[i - 2]) % 1234567;

  return check[n];
}
console.log(solution(10));

function solution(n) {
  const check = new Array(n < 4 ? 5 : n + 1).fill(0);

  check[0] = 1;
  check[2] = 3;
  check[4] = 11;

  for (let i = 6; i < n + 1; i += 2) {
    check[i] = (3 * check[i - 2]) % 1000000007;
    for (let j = 0; j < i - 2; j += 2) check[i] += (2 * check[j]) % 1000000007;
  }
  // console.log(check);
  return check[n] % 1000000007;
}

console.log(solution(5000));

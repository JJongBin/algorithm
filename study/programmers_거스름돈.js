function solution(n, money) {
  const dp = new Array(n + 1).fill(0);

  for (const m of money) {
    dp[m] += 1;
    for (let i = m; i <= n; i++) dp[i] += dp[i - m];
  }

  return dp[n] % 1000000007;
}

console.log(solution(5, [1, 2, 5]));

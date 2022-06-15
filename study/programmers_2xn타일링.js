function solution(n) {
  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 3;
  for (let i = 4; i < n + 1; i++) dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007;

  return dp[n];
}
console.log(solution());

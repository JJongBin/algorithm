var longestPalindromeSubseq = function (s) {
  let answer = 0;
  const len = s.length;
  const dp = new Array(len);
  for (let i = 0; i < len; i++) dp[i] = new Array(len).fill(0);

  for (let i = 0; i < len; i++) dp[i][i] = 1;
  for (let i = 0; i < len - 1; i++) {
    if (s[i] === s[i + 1]) dp[i][i + 1] = 2;
    else dp[i][i + 1] = 1;
  }

  for (let i = len - 3; i >= 0; i--) {
    for (let j = i + 2; j < len; j++) {
      if (s[i] === s[j]) dp[i][j] = dp[i + 1][j - 1] + 2;
      else dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j]);
    }
  }
  answer = dp[0][len - 1];
  return answer;
};

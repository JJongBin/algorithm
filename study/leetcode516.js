var countSubstrings = function (s) {
  const len = s.length;
  let answer = len;
  const dp = new Array(len);
  for (let i = 0; i < len; i++) dp[i] = new Array(len).fill(0);

  for (let i = 0; i < len; i++) dp[i][i] = 1;
  for (let i = 0; i < len - 1; i++) {
    if (s[i] === s[i + 1]) {
      answer++;
      dp[i][i + 1] = 1;
    }
  }
  for (let i = len - 3; i >= 0; i--) {
    for (let j = i + 2; j < len; j++) {
      if (s[i] === s[j] && dp[i + 1][j - 1] === 1) {
        answer++;
        dp[i][j] = 1;
      }
    }
  }
  return answer;
};
console.log(countSubstrings('aaa'));

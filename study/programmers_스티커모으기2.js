function solution(sticker) {
  var answer = 0;

  const len = sticker.length;
  if (len <= 1) return sticker[0];

  const dp = [...Array(2)].map(_ => new Array(len).fill(0));

  dp[0][0] = sticker[0];
  dp[0][1] = sticker[0];
  dp[1][1] = sticker[1];

  for (let i = 2; i < len; i++) {
    dp[0][i] = dp[0][i - 2] + sticker[i] > dp[0][i - 1] ? dp[0][i - 2] + sticker[i] : dp[0][i - 1];
    dp[1][i] = dp[1][i - 2] + sticker[i] > dp[1][i - 1] ? dp[1][i - 2] + sticker[i] : dp[1][i - 1];
  }

  answer = Math.max(dp[0][len - 2], dp[1][len - 1]);

  return answer;
}

console.log(solution([14, 6, 5, 11, 3, 9, 2, 10]));

function solution(target) {
  const dp = [...Array(301)].map(_ => new Array(2).fill(0));

  const setScore = (arr, s1, s2) => {
    arr[0] = s1;
    arr[1] = s2;
  };

  for (let i = 1; i <= 20; i++) {
    setScore(dp[i * 3], 1, 0);
    setScore(dp[i * 2], 1, 0);
    setScore(dp[i], 1, 1);
  }
  setScore(dp[50], 1, 1);

  for (let i = 1; i <= 300; i++) {
    if (dp[i][0]) continue;

    let temp = [300, 300];
    for (let j = 1; j <= 60; j++) {
      if (i - j < 0) continue;

      let check;
      if (j <= 20 || j === 50) check = [dp[i - j][0] + 1, dp[i - j][1] + 1];
      else if ((!(j % 2) && j / 2 <= 20) || (!(j % 3) && j / 3 <= 20)) check = [dp[i - j][0] + 1, dp[i - j][1]];
      else continue;

      if (temp[0] > check[0]) temp = check;
      else if (temp[0] === check[0] && temp[1] < check[1]) temp = check;
    }
    setScore(dp[i], temp[0], temp[1]);
  }

  let cnt = 0;
  while (target > 300) {
    target -= 60;
    cnt += 1;
  }

  return [dp[target][0] + cnt, dp[target][1]];
}

console.log(solution(106));

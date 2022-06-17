function solution(k, dungeons) {
  var answer = -1;
  const len = dungeons.length;
  const check = new Array(len).fill(0);

  const dfs = (energy, cnt) => {
    answer = Math.max(cnt, answer);
    for (let i = 0; i < len; i++) {
      if (check[i]) continue;
      check[i] = 1;
      if (dungeons[i][0] <= energy) dfs(energy - dungeons[i][1], cnt + 1);
      check[i] = 0;
    }
  };

  dfs(k, 0);

  return answer;
}
console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
);

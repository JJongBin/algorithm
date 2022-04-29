function solution(N, stages) {
  var answer = [];
  const fail = [...Array(N)].map(_ => new Array(2).fill(0));
  const clearStageArr = new Array(N + 1).fill(0);
  let users = stages.length;

  for (const s of stages) clearStageArr[s - 1]++;

  for (let i = 1; i <= N; i++) {
    fail[i - 1][0] = i;
    fail[i - 1][1] = clearStageArr[i - 1] / users;
    users -= clearStageArr[i - 1];
  }

  fail.sort((a, b) => b[1] - a[1]);

  for (const [stage, failPercent] of fail) answer.push(stage);
  return answer;
}
console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));

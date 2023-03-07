function solution(n, results) {
  var answer = 0;

  const graphWinner = {};
  const graphLoser = {};

  for (const result of results) {
    const [winner, loser] = result;
    if (!graphLoser[winner]) graphLoser[winner] = [];
    graphLoser[winner].push(loser);

    if (!graphWinner[loser]) graphWinner[loser] = [];
    graphWinner[loser].push(winner);
  }

  const dfs = (player, type, check) => {
    const opponents = type === 'win' ? graphWinner[player] : graphLoser[player];
    if (!opponents) return;

    for (const opponent of opponents) {
      if (check[opponent]) continue;
      dfs(opponent, type, check);
      check[opponent] = 1;
    }

    return;
  };

  for (let player = 1; player < n + 1; player++) {
    const checkWin = new Array(n + 1).fill(0);
    const checkLose = new Array(n + 1).fill(0);

    dfs(player, 'win', checkWin);
    dfs(player, 'lose', checkLose);

    const cntWin = checkWin.reduce((a, b) => a + b, 0);
    const cntLose = checkLose.reduce((a, b) => a + b, 0);

    if (cntWin + cntLose === n - 1) answer += 1;
  }

  return answer;
}

console.log(
  solution(5, [
    [4, 3],
    [4, 2],
    [3, 2],
    [1, 2],
    [2, 5],
  ])
);

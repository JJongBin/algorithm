function solution(picks, minerals) {
  var answer = Infinity;

  const mineralsOfPick = {
    diamond: [1, 5, 25],
    iron: [1, 1, 5],
    stone: [1, 1, 1],
  };

  const len = minerals.length;
  const availableTools = [...picks];

  const dfs = (idx, tired) => {
    const availableToolCnt = availableTools.reduce((a, b) => a + b, 0);
    if (len <= idx || 0 >= availableToolCnt) {
      answer = Math.min(answer, tired);
      return;
    }

    const max = len < idx + 5 ? len : idx + 5;

    for (let k = 0; k < 3; k++) {
      if (availableTools[k] <= 0) continue;

      let needTired = 0;
      for (let i = idx; i < max; i++) {
        needTired += mineralsOfPick[minerals[i]][k];
      }

      availableTools[k] -= 1;
      dfs(max, tired + needTired);
      availableTools[k] += 1;
    }
  };

  dfs(0, 0);
  return answer;
}

console.log(solution([1, 3, 2], ['diamond', 'diamond', 'diamond', 'iron', 'iron', 'diamond', 'iron', 'stone']));
console.log(
  solution([0, 1, 1], ['diamond', 'diamond', 'diamond', 'diamond', 'diamond', 'iron', 'iron', 'iron', 'iron', 'iron', 'diamond'])
);

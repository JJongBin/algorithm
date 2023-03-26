// function solution(picks, minerals) {
//   var answer = Infinity;

//   const mineralsOfPick = {
//     diamond: [1, 5, 25],
//     iron: [1, 1, 5],
//     stone: [1, 1, 1],
//   };

//   const len = minerals.length;
//   const totalToolCnt = picks.reduce((a, b) => a + b, 0);

//   const search = (idx, tool, d, i, s, tired) => {
//     const max = len < idx + 5 ? len : idx + 5;
//     for (idx; idx < max; idx++) {
//       tired += mineralsOfPick[minerals[idx]][tool];
//     }

//     if (len <= idx + 1 || d + i + s >= totalToolCnt) {
//       answer = Math.min(answer, tired);
//       return;
//     }

//     if (picks[0] > d) search(idx, 0, d + 1, i, s, tired);
//     if (picks[1] > i) search(idx, 1, d, i + 1, s, tired);
//     if (picks[2] > s) search(idx, 2, d, i, s + 1, tired);
//   };

//   if (picks[0]) search(0, 0, 1, 0, 0, 0);
//   if (picks[1]) search(0, 1, 0, 1, 0, 0);
//   if (picks[2]) search(0, 2, 0, 0, 1, 0);

//   return answer;
// }
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

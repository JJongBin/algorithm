function solution(targets) {
  var answer = 0;

  targets.sort((a, b) => a[1] - b[1]);

  let pos = -1;
  for (let i = 0; i < targets.length; i++) {
    if (pos > targets[i][0]) continue;
    if (targets[i][1] > pos) {
      answer += 1;
      pos = targets[i][1] - 0.5;
    }
  }

  return answer;
}

console.log(
  solution([
    [4, 5],
    [4, 8],
    [10, 14],
    [11, 13],
    [5, 12],
    [3, 7],
    [1, 4],
  ])
);

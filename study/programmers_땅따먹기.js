function solution(land) {
  for (let k = 1; k < land.length; k++) {
    for (let i = 0; i < 4; i++) {
      let num = land[k][i];
      for (let j = 0; j < 4; j++) {
        if (i === j) continue;
        land[k][i] = Math.max(land[k][i], num + land[k - 1][j]);
      }
    }
  }
  return Math.max(...land[land.length - 1]);
}
console.log(
  solution([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1],
  ])
);

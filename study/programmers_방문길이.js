function solution(dirs) {
  const check = new Set();
  let x = 0;
  let y = 0;
  const direction = {
    U: [1, 0],
    D: [-1, 0],
    R: [0, 1],
    L: [0, -1],
  };

  for (const d of dirs) {
    if (x + direction[d][0] < -5 || x + direction[d][0] > 5 || y + direction[d][1] < -5 || y + direction[d][1] > 5)
      continue;
    check.add(`(${x},${y})-(${x + direction[d][0]},${y + direction[d][1]})`);
    check.add(`(${x + direction[d][0]},${y + direction[d][1]})-(${x},${y})`);
    x += direction[d][0];
    y += direction[d][1];
  }
  return check.size / 2;
}
console.log(solution('ULURRDLLU'));
console.log(solution('LULLLLLLU'));

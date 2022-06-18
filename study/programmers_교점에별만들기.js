function solution(line) {
  const len = line.length;
  const point = new Set();
  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;
  for (let i = 0; i < len; i++) {
    const [a, b, e] = line[i];
    for (let j = i + 1; j < len; j++) {
      const [c, d, f] = line[j];

      if (!(a * d - b * c)) continue;
      const x = (b * f - e * d) / (a * d - b * c);
      const y = (e * c - a * f) / (a * d - b * c);

      if (x % 1 || y % 1) continue;
      point.add(`${x},${y}`);
      minX = Math.min(minX, x);
      maxX = Math.max(maxX, x);
      minY = Math.min(minY, y);
      maxY = Math.max(maxY, y);
    }
  }
  const lenY = maxY - minY + 1 > 1000 ? 1000 : maxY - minY + 1;
  const lenX = maxX - minX + 1 > 1000 ? 1000 : maxX - minX + 1;
  const answer = [...Array(lenY)].map(_ => new Array(lenX).fill('.'));
  for (const p of point) {
    const [x, y] = p.split(',').map(Number);
    if (maxX - x >= 1000 || maxY - y >= 1000) continue;
    answer[maxY - y][x - minX] = '*';
  }

  return answer.map(arr => arr.join(''));
}
console.log(
  solution([
    [2, -1, 4],
    [-2, -1, 4],
    [0, -1, 1],
    [5, -8, -12],
    [5, 8, 12],
  ])
);

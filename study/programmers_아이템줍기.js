function solution(rectangle, characterX, characterY, itemX, itemY) {
  var answer = 0;

  const board = [...Array(102)].map(_ => new Array(102).fill(0));

  for (const r of rectangle) {
    for (let i = r[1] * 2; i <= r[3] * 2; i++) {
      for (let j = r[0] * 2; j <= r[2] * 2; j++) {
        board[i][j]++;
      }
    }
  }

  const dy = [-1, 0, 1, 0, -1, 1, 1, -1];
  const dx = [0, 1, 0, -1, 1, 1, -1, -1];

  const check = [...Array(102)].map(_ => new Array(102).fill(0));
  const queue = [[characterY * 2, characterX * 2]];
  check[characterY * 2][characterX * 2] = 1;

  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const [y, x] = queue.shift();
      if (itemX * 2 === x && itemY * 2 === y) return answer / 2;

      for (let k = 0; k < 4; k++) {
        const xx = x + dx[k];
        const yy = y + dy[k];

        if (xx < 1 || xx > 100 || yy < 1 || yy > 100) continue;
        if (!board[yy][xx]) continue;
        if (check[yy][xx]) continue;
        check[yy][xx] = 1;

        for (let kk = 0; kk < 8; kk++) {
          const xxx = xx + dx[kk];
          const yyy = yy + dy[kk];

          if (xxx < 0 || xxx > 101 || yyy < 0 || yyy > 101) continue;
          if (!board[yyy][xxx]) {
            queue.push([yy, xx]);
            break;
          }
        }
      }
    }
    answer += 1;
  }

  return answer / 2;
}

console.log(solution([[1, 1, 5, 7]], 1, 1, 4, 7));
console.log(
  solution(
    [
      [1, 1, 7, 4],
      [3, 2, 5, 5],
      [4, 3, 6, 9],
      [2, 6, 8, 8],
    ],
    1,
    3,
    7,
    8
  )
);

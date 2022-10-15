const solution = music => {
  var answer = 0;
  const canMove = {
    1: [2, 3],
    2: [1, 3],
    3: [1, 2, 4, 5],
    4: [3, 5],
    5: [3, 4, 6, 7],
    6: [5, 7],
    7: [5, 6, 8],
    8: [7, 9, 10],
    9: [8, 10],
    10: [8, 9, 11, 12],
    11: [10, 12],
    12: [10, 11],
  };

  const getDist = (nowPos, target) => {
    if (nowPos === target) return 0;

    const queue = [nowPos];
    const check = new Array(13).fill(0);
    check[nowPos] = 1;
    let cnt = 0;

    while (queue.length) {
      const len = queue.length;
      for (let i = 0; i < len; i++) {
        const pos = queue.shift();
        for (const nextPos of canMove[pos]) {
          if (check[nextPos]) continue;
          if (target === nextPos) return cnt + 1;
          check[nextPos] = 1;
          queue.push(nextPos);
        }
      }
      cnt++;
    }
  };

  let now = 1;
  for (const m of music) {
    answer += getDist(now, m);
    now = m;
  }

  return answer;
};
console.log(solution([10, 9, 4, 5, 12]));
console.log(solution([12, 9, 4, 5, 12]));
console.log(solution([6, 4, 2, 11]));

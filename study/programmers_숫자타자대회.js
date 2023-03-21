function solution(numbers) {
  var answer = Infinity;

  const board = [
    [4, 2],
    [1, 1],
    [1, 2],
    [1, 3],
    [2, 1],
    [2, 2],
    [2, 3],
    [3, 1],
    [3, 2],
    [3, 3],
  ];

  const check = [...Array(numbers.length)].map(_ => [...Array(10)].map(_ => new Array(10).fill('-')));

  const calcDist = (now, target) => {
    if (now == target) return 1;

    const [nowX, nowY] = board[now];
    const [targetX, targetY] = board[target];

    let x = Math.abs(nowX - targetX);
    let y = Math.abs(nowY - targetY);

    let cnt = 0;
    while (x || y) {
      if (x && y) {
        cnt += 3;
        x -= 1;
        y -= 1;
      } else if (x) {
        cnt += 2 * x;
        x = 0;
      } else if (y) {
        cnt += 2 * y;
        y = 0;
      }
    }
    return cnt;
  };

  check[0][4][numbers[0]] = calcDist(6, numbers[0]);
  check[0][numbers[0]][6] = calcDist(4, numbers[0]);

  for (let k = 1; k < numbers.length; k++) {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (i === j) continue;
        if (check[k - 1][i][j] === '-') continue;

        const calc1 = check[k - 1][i][j] + calcDist(j, numbers[k]);
        if (check[k][i][numbers[k]] === '-') check[k][i][numbers[k]] = calc1;
        else check[k][i][numbers[k]] = Math.min(check[k][i][numbers[k]], calc1);

        const calc2 = check[k - 1][i][j] + calcDist(i, numbers[k]);
        if (check[k][numbers[k]][j] === '-') check[k][numbers[k]][j] = calc2;
        else check[k][numbers[k]][j] = Math.min(check[k][numbers[k]][j], calc2);
      }
    }
  }

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (check[numbers.length - 1][i][j] === '-') continue;
      answer = Math.min(answer, check[numbers.length - 1][i][j]);
    }
  }

  return answer;
}

console.log(solution('1756'));
console.log(solution('5123'));

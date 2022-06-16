function solution(n) {
  var answer = [];
  const arr = [...Array(n)].map(_ => new Array(n).fill(0));

  const rotate = (x, y, num) => {
    while (true) {
      if (x >= n || arr[x][y]) {
        x--;
        break;
      }
      arr[x][y] = num;
      x++;
      num++;
    }
    y++;
    while (true) {
      if (y >= n || arr[x][y]) {
        y--;
        break;
      }
      arr[x][y] = num;
      y++;
      num++;
    }
    x--;
    y--;
    while (true) {
      if (y < 0 || x < 0 || arr[x][y]) {
        y++;
        x++;
        break;
      }
      arr[x][y] = num;
      x--;
      y--;
      num++;
    }
    return [x + 1, y, num];
  };

  let x = 0;
  let y = 0;
  let num = 1;
  while (!arr[x][y]) {
    [x, y, num] = rotate(x, y, num);
    if (x < 0 || y < 0 || x >= n || y >= n) break;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j]) answer.push(arr[i][j]);
    }
  }

  return answer;
}
console.log(solution(1));

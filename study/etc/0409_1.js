function solution(path) {
  var answer = [];
  let stack = [];
  let time = 0;

  const changeDirection = {
    N: { W: 'left', E: 'right' },
    E: { N: 'left', S: 'right' },
    S: { E: 'left', W: 'right' },
    W: { S: 'left', N: 'right' },
  };

  for (const p of path) {
    if (!stack.length || stack[stack.length - 1] === p) {
      stack.push(p);
    } else {
      const len = stack.length;
      const nowTime = len >= 5 ? time + len - 5 : time;
      const nowDist = len >= 5 ? 500 : len * 100;
      const direction = changeDirection[stack[len - 1]][p];

      answer.push(`Time ${nowTime}: Go straight ${nowDist}m and turn ${direction}`);
      time += len;
      stack = [p];
    }
  }

  return answer;
}

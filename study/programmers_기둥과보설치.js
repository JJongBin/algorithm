function solution(n, build_frame) {
  var answer = [];
  const hash = new Set();

  const check = () => {
    for (const item of hash) {
      const [x, y, frame] = item.split('-').map(Number);
      if (frame) {
        if (
          !hash.has(`${x}-${y - 1}-${0}`) &&
          !hash.has(`${x + 1}-${y - 1}-${0}`) &&
          !(hash.has(`${x - 1}-${y}-${1}`) && hash.has(`${x + 1}-${y}-${1}`))
        )
          return false;
      } else {
        if (y && !hash.has(`${x}-${y - 1}-${0}`) && !hash.has(`${x}-${y}-${1}`) && !hash.has(`${x - 1}-${y}-${1}`))
          return false;
      }
    }
    return true;
  };

  for (const [x, y, frame, build] of build_frame) {
    const item = `${x}-${y}-${frame}`;
    if (build) {
      hash.add(item);
      if (!check()) hash.delete(item);
    } else {
      hash.delete(item);
      if (!check()) hash.add(item);
    }
  }

  answer = [...hash].map(item => item.split('-').map(Number));
  answer.sort((a, b) => {
    if (a[0] === b[0]) {
      if (a[1] === b[1]) return a[2] - b[2];
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });

  return answer;
}
console.log(
  solution(5, [
    [1, 0, 0, 1],
    [1, 1, 1, 1],
    [2, 1, 0, 1],
    [2, 2, 1, 1],
    [5, 0, 0, 1],
    [5, 1, 0, 1],
    [4, 2, 1, 1],
    [3, 2, 1, 1],
  ])
);
console.log(
  solution(5, [
    [0, 0, 0, 1],
    [2, 0, 0, 1],
    [4, 0, 0, 1],
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [2, 1, 1, 1],
    [3, 1, 1, 1],
    [2, 0, 0, 0],
    [1, 1, 1, 0],
    [2, 2, 0, 1],
  ])
);

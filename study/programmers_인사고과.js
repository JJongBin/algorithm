function solution(scores) {
  var answer = 1;

  const sum = scores[0][0] + scores[0][1];
  scores = scores.map((score, i) => [...score, i]);
  scores.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return b[0] - a[0];
  });

  let maxS2 = 0;
  for (const score of scores) {
    const [s1, s2, i] = score;

    if (s2 < maxS2) {
      if (i === 0) return -1;
    } else {
      maxS2 = s2;
      if (s1 + s2 > sum) answer += 1;
    }
  }

  return answer;
}

console.log(
  solution([
    [2, 2],
    [1, 4],
    [3, 2],
    [3, 2],
    [2, 1],
  ])
);

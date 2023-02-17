function solution(cards) {
  const len = cards.length;

  const check = new Array(len).fill(0);
  const score = [];

  for (let i = 0; i < len; i++) {
    if (check[i]) continue;

    let cnt = 0;
    let idx = i;
    while (!check[idx]) {
      check[idx] = 1;
      idx = cards[idx] - 1;
      cnt++;
    }
    score.push(cnt);
  }

  if (score.length === 1) return 0;

  score.sort((a, b) => b - a);

  return score[0] * score[1];
}

console.log(solution([8, 6, 3, 7, 2, 5, 1, 4]));

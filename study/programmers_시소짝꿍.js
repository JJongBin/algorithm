function solution(weights) {
  var answer = 0;

  const hash = new Map();

  for (const weight of weights) {
    const weightArr = [weight / 2, (weight * 2) / 3, (weight * 3) / 4, weight, (weight * 4) / 3, (weight * 3) / 2, weight * 2];
    for (const w of weightArr) {
      answer += hash.get(w) || 0;
    }

    hash.set(weight, (hash.get(weight) || 0) + 1);
  }

  return answer;
}

console.log(solution([100, 180, 360, 100, 270]));

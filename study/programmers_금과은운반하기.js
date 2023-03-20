function solution(a, b, g, s, w, t) {
  var answer = Infinity;

  const n = g.length;

  let left = 1;
  let right = 10 ** 15;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    let gold = 0;
    let silver = 0;
    let total = 0;
    for (let i = 0; i < n; i++) {
      const canOneWay = mid % (t[i] * 2) >= t[i];
      let availableWeight = Math.floor(mid / (t[i] * 2)) * w[i];
      if (canOneWay) availableWeight += w[i];

      gold += availableWeight > g[i] ? g[i] : availableWeight;
      silver += availableWeight > s[i] ? s[i] : availableWeight;
      total += availableWeight > s[i] + g[i] ? s[i] + g[i] : availableWeight;
    }

    if (gold >= a && silver >= b && total >= a + b) {
      right = mid;
      answer = Math.min(answer, mid);
    } else {
      left = mid + 1;
    }
  }

  return answer;
}

console.log(solution(10, 10, [100], [100], [7], [10]));
console.log(solution(90, 500, [70, 70, 0], [0, 0, 500], [100, 100, 2], [4, 8, 1]));

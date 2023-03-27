function solution(a) {
  var answer = -1;

  const hash = new Map();
  for (const num of a) {
    hash.set(num, (hash.get(num) || 0) + 1);
  }

  const hashArr = [...hash.entries()].sort((a, b) => b[1] - a[1]);

  for (const [num, cnt] of hashArr) {
    if (answer > cnt * 2) break;

    let starCnt = 0;
    for (let i = 1; i < a.length; i++) {
      if (a[i - 1] === a[i]) continue;
      if (a[i - 1] !== num && a[i] !== num) continue;

      starCnt += 2;
      i += 1;
    }
    answer = Math.max(answer, starCnt);
  }

  return answer;
}

console.log(solution([5, 2, 3, 3, 5, 3]));
console.log(solution([2, 2, 3, 2, 3, 3, 3]));

function solution(n, weak, dist) {
  var answer = Infinity;
  const weakCnt = weak.length;
  const distCnt = dist.length;

  weak.sort((a, b) => a - b);
  for (let i = 0; i < weakCnt; i++) weak.push(weak[i] + n);

  let dists = [];
  const combiDist = (cnt, arr, check) => {
    if (cnt === arr.length) dists.push(arr);
    else {
      for (let i = 0; i < distCnt; i++) {
        if (check[i]) continue;
        check[i] = 1;
        combiDist(cnt, [...arr, dist[i]], [...check]);
        check[i] = 0;
      }
    }
  };

  for (let i = 0; i < weakCnt; i++) {
    for (let cnt = 1; cnt < distCnt + 1; cnt++) {
      const check = new Array(distCnt).fill(0);
      combiDist(cnt, [], check);

      for (const d of dists) {
        for (let k = i; k < i + weakCnt - 1; k++) {
          if (!d.length) break;
          if (d[d.length - 1] >= weak[k + 1] - weak[k]) {
            d[d.length - 1] -= weak[k + 1] - weak[k];
          } else d.pop();
        }
        if (d.length) {
          answer = Math.min(answer, cnt);
          break;
        }
      }

      dists = [];
    }
  }

  return answer > distCnt ? -1 : answer;
}
console.log(solution(12, [1, 5, 6, 10], [1, 2, 3, 4]));
console.log(solution(12, [1, 3, 4, 9, 10], [3, 5, 7]));

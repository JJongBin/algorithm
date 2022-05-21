function solution(n, info) {
  var answer = [];
  const result = new Array(11).fill(0);
  let compareScore = 0;
  let minScore = 0;

  const checkScore = () => {
    let a = 0;
    let b = 0;
    let checkMinScore = 0;
    for (let i = 0; i < 11; i++) {
      if (!info[i] && !result[i]) continue;
      if (info[i] >= result[i]) a += 10 - i;
      else {
        b += 10 - i;
        checkMinScore = Math.max(checkMinScore, i);
      }
    }

    if (b > a && compareScore <= b - a) {
      if (minScore > checkMinScore && compareScore === b - a) return;
      compareScore = b - a;
      answer = [...result];
      minScore = checkMinScore;
    }
  };

  const dfs = (cnt, idx) => {
    if (cnt <= 0) checkScore();
    else {
      for (let i = idx; i < 11; i++) {
        if (result[i]) continue;
        if (i === 10 && cnt <= info[i]) {
          result[i] = cnt;
          dfs(cnt - info[i] - 1, i + 1);
          result[i] = 0;
        } else if (cnt > info[i]) {
          result[i] = info[i] + 1;
          dfs(cnt - info[i] - 1, i + 1);
          result[i] = 0;
        }
      }
    }
  };

  dfs(n, 0);

  return answer.length ? answer : [-1];
}
console.log(solution(5, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]));
console.log(solution(10, [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1]));
console.log(solution(1, [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
console.log(solution(9, [0, 0, 1, 2, 0, 1, 1, 1, 1, 1, 1]));
console.log(solution(10, [0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 3]));

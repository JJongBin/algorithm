function solution(n, cores) {
  var answer = 0;
  if (n <= cores.length) return n;

  n -= cores.length;

  let left = 1;
  let right = 10000 * n;

  let time = 0;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const sum = cores.reduce((prev, core) => prev + Math.floor(mid / core), 0);

    if (n <= sum) {
      right = mid - 1;
      time = mid;
    } else {
      left = mid + 1;
    }
  }

  for (const core of cores) n -= Math.floor((time - 1) / core);

  for (let i = 0; i < cores.length; i++) {
    if (!(time % cores[i])) {
      n -= 1;
      if (n <= 0) {
        answer = i + 1;
        break;
      }
    }
  }

  return answer;
}

// console.log(solution(7, [1, 2, 3, 4, 5]));
console.log(solution(6, [1, 2, 3]));
// console.log(solution(6, [100, 1000]));

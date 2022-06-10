function solution(n, m) {
  var answer = [1, Math.max(n, m)];

  for (let i = Math.min(n, m); i > 1; i--) {
    if (!(n % i) && !(m % i)) {
      answer[0] = i;
      break;
    }
  }

  while (true) {
    if (!(answer[1] % n) && !(answer[1] % m)) break;
    answer[1]++;
  }

  return answer;
}
console.log(solution(3, 12));

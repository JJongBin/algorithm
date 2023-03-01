function solution(n, s) {
  var answer = [];

  if (s / n < 1) return [-1];

  while (n) {
    const num = Math.floor(s / n);
    answer.push(num);
    s -= num;
    n -= 1;
  }

  return answer;
}

console.log(solution(2, 9));

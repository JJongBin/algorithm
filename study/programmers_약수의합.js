function solution(n) {
  var answer = 0;
  for (let i = 1; i <= Math.ceil(Math.sqrt(n)); i++) {
    if (n % i) continue;
    if (n / i !== i) answer += n / i;
    answer += i;
  }
  return answer;
}
console.log(solution(16));

function solution(n) {
  var answer = 0;
  for (const s of n + '') answer += +s;
  return answer;
}
console.log(solution(123));

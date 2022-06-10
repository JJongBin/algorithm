function solution(num) {
  var answer = 0;
  while (answer <= 500) {
    if (num === 1) break;
    num = num % 2 ? num * 3 + 1 : num / 2;
    answer++;
  }
  return answer > 500 ? -1 : answer;
}
console.log(solution(6));

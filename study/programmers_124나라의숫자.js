function solution(n) {
  var answer = '';

  while (n) {
    if (n % 3) {
      answer = (n % 3) + answer;
      n = Math.floor(n / 3);
    } else {
      answer = '4' + answer;
      n = Math.floor(n / 3) - 1;
    }
  }
  return answer;
}
console.log(solution(15));

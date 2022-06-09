function solution(n) {
  var answer = 0;
  const formatNum = n.toString(3).split('').reverse().join('');
  answer = Number.parseInt(formatNum, 3);
  return answer;
}
console.log(solution(45));

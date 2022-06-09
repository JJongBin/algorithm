function solution(a, b) {
  var answer = '';
  const day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const d = new Date(`2016/${a}/${b}`).getDay();
  answer = day[d];
  return answer;
}
console.log(solution(5, 22));

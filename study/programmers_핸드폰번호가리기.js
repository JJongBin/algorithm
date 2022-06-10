function solution(phone_number) {
  var answer = '';
  const len = phone_number.length;
  for (let i = 0; i < len - 4; i++) answer += '*';
  answer += phone_number.slice(len - 4);

  return answer;
}
console.log(solution('01033334444'));

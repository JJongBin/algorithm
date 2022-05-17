function solution(n, t, m, p) {
  var answer = '';
  let num = 0;
  let str = '';
  const target = t * m;
  while (str.length < target) {
    str += num.toString(n).toUpperCase();
    num++;
  }
  for (let i = 0; i < t; i++) answer += str[i * m + p - 1];

  return answer;
}
console.log(solution(2, 4, 2, 1));
console.log(solution(16, 16, 2, 1));

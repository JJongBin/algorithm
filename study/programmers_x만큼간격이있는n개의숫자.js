function solution(x, n) {
  var answer = [];
  let num = x;
  while (answer.length < n) {
    answer.push(num);
    num += x;
  }
  return answer;
}
console.log(solution(2, 5));

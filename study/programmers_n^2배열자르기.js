function solution(n, left, right) {
  var answer = [];
  for (let i = left; i < right + 1; i++) {
    if (Math.floor(i / n) < i % n) answer.push((i % n) + 1);
    else answer.push(Math.floor(i / n) + 1);
  }

  return answer;
}
console.log(solution(5, 2, 7));
console.log(solution(3, 2, 5));

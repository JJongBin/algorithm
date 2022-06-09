function solution(arr, divisor) {
  var answer = [];

  for (const a of arr) {
    if (a % divisor) continue;
    answer.push(a);
  }

  answer.sort((a, b) => a - b);
  return answer.length ? answer : [-1];
}
console.log(solution([5, 9, 7, 10], 5));

function solution(numbers) {
  const answer = numbers
    .map(item => item + '')
    .sort((a, b) => +(b + a) - +(a + b))
    .join('');

  return answer[0] === '0' ? '0' : answer;
}
console.log(solution([20, 16, 3, 6, 12, 10, 11, 202]));
console.log(solution([30029, 300299, 34, 5, 9]));
console.log(solution([101, 10, 232, 23]));

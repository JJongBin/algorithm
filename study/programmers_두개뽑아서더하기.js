function solution(numbers) {
  var answer = [];
  const hash = new Set();
  const len = numbers.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) hash.add(numbers[i] + numbers[j]);
  }
  answer = [...hash].sort((a, b) => a - b);
  return answer;
}
console.log(solution([2, 1, 3, 4, 1]));

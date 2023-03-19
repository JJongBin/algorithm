function solution(sequence) {
  var answer = 0;

  let sum = 0;
  let max = -Infinity;
  let min = Infinity;
  for (let i = 0; i < sequence.length; i++) {
    const s = i % 2 ? sequence[i] : -sequence[i];
    sum += s;

    if (max < sum) max = sum;
    if (min > sum) min = sum;
  }

  if (max > 0 && min > 0) answer = max;
  else if (max < 0 && min < 0) answer = -min;
  else answer = Math.abs(max) + Math.abs(min);

  return answer;
}

console.log(solution([2, 3, -6, 1, 3, -1, 2, 4]));

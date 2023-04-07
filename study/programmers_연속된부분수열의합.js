function solution(sequence, k) {
  var answer = [];

  let sum = 0;
  let left = 0;
  for (let right = 0; right < sequence.length; right++) {
    sum += sequence[right];

    while (sum > k) {
      sum -= sequence[left];
      left += 1;
    }

    if (sum === k) answer.push([left, right]);
  }

  answer.sort((a, b) => {
    if (a[1] - a[0] === b[1] - b[0]) a[0] - b[0];
    return a[1] - a[0] - (b[1] - b[0]);
  });

  return answer[0];
}

console.log(solution([1, 2, 3, 4, 5], 7));

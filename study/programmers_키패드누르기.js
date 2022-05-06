function solution(numbers, hand) {
  var answer = '';

  let left = [3, 0];
  let right = [3, 2];
  for (const n of numbers) {
    if (n === 1 || n === 4 || n === 7) {
      answer += 'L';
      left = [Math.floor(n / 3), 0];
    } else if (n === 3 || n === 6 || n === 9) {
      answer += 'R';
      right = [n / 3 - 1, 2];
    } else {
      let temp = Math.floor(n / 3);
      if (n === 0) temp = 3;

      const l = Math.abs(left[0] - temp) + Math.abs(left[1] - 1);
      const r = Math.abs(right[0] - temp) + Math.abs(right[1] - 1);
      if (l > r) {
        right = [temp, 1];
        answer += 'R';
      } else if (l < r) {
        left = [temp, 1];
        answer += 'L';
      } else {
        if (hand === 'right') {
          right = [temp, 1];
          answer += 'R';
        } else {
          left = [temp, 1];
          answer += 'L';
        }
      }
    }
  }

  return answer;
}
console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right')); // LRLLLRLLRRL
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left')); // LRLLRRLLLRR

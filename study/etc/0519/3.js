function solution(water, time) {
  var answer = [];
  const len = water.length;
  const asc = new Array(len).fill(0);
  const desc = new Array(len).fill(0);

  for (let i = 0; i < len; i++) {
    if (i < len && water[i] >= water[i + 1]) asc[i + 1] = 1;
    if (i > 0 && water[i - 1] <= water[i]) desc[i - 1] = 1;
  }
  asc[0] = 1;
  desc[desc.length - 1] = 1;

  const check = new Set();
  let left = [0, 0];
  let right = [0, 0];

  for (let i = 0; i < len; i++) {
    if (left[0] <= time) {
      left[0]++;
      left[1] += asc[i];
    } else {
      left[1] -= asc[i - time];
      left[1] += asc[i];
    }

    if (left[0] === time + 1 && left[0] === left[1]) check.add(i);
  }

  for (let i = len - 1; i >= 0; i--) {
    if (right[0] <= time) {
      right[0]++;
      right[1] += desc[i];
    } else {
      right[1] -= desc[i + time];
      right[1] += desc[i];
    }

    if (right[0] === time + 1 && right[0] === right[1]) {
      if (check.has(i)) answer.push(i);
    }
  }

  return answer.sort((a, b) => a - b);
}
console.log(solution([5, 3, 3, 3, 5, 6, 2], 2));
console.log(solution([1, 1, 1, 1, 1], 0));
console.log(solution([1, 2, 3, 4, 5, 6], 2));
console.log(solution([1, 2, 3, 1, 2, 3], 1));

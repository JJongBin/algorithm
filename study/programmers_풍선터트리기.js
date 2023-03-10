function solution(a) {
  var answer = 0;

  if (a.length < 3) return a.length;

  const leftMinArr = new Array(a.length);
  const rightMinArr = new Array(a.length);

  leftMinArr[0] = a[0];
  for (let i = 1; i < a.length; i++) {
    leftMinArr[i] = leftMinArr[i - 1] > a[i] ? a[i] : leftMinArr[i - 1];
  }

  rightMinArr[a.length - 1] = a[a.length - 1];
  for (let i = a.length - 2; i >= 0; i--) {
    rightMinArr[i] = rightMinArr[i + 1] > a[i] ? a[i] : rightMinArr[i + 1];
  }

  for (let i = 1; i < a.length - 1; i++) {
    if (leftMinArr[i - 1] < a[i] && rightMinArr[i + 1] < a[i]) continue;
    answer += 1;
  }

  return answer + 2;
}

console.log(solution([9, -1, -5]));
console.log(solution([-16, 27, 65, -2, 58, -92, -71, -68, -61, -33]));

function solution(cookie) {
  var answer = 0;
  const cookieLen = cookie.length;

  for (let i = 0; i < cookieLen - 1; i++) {
    let left = i;
    let right = i + 1;
    let leftSum = cookie[left];
    let rightSum = cookie[right];

    while (true) {
      if (leftSum === rightSum) answer = Math.max(answer, leftSum);

      if (leftSum <= rightSum) {
        left--;
        if (left < 0) break;
        leftSum += cookie[left];
      } else {
        right++;
        if (right >= cookieLen) break;
        rightSum += cookie[right];
      }
    }
  }

  return answer;
}

console.log(solution([1, 1, 2, 3]));

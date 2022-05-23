function solution(stones, k) {
  var answer = 1;
  let right = 200000000;

  while (answer <= right) {
    const mid = Math.floor((answer + right) / 2);
    let cnt = 0;
    let changedRight = false;

    for (let s of stones) {
      cnt = s <= mid ? cnt + 1 : 0;
      if (cnt >= k) {
        right = mid - 1;
        changedRight = true;
        break;
      }
    }

    if (!changedRight) answer = mid + 1;
  }

  return answer;
}
console.log(solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3));

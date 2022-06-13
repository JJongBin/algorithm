function solution(n, a, b) {
  let cnt = 0;
  let left = 1;
  let right = n;
  while (true) {
    const mid = Math.floor((left + right) / 2);
    if (a <= mid && b <= mid) right = mid;
    else if (a > mid && b > mid) left = mid + 1;
    else break;

    cnt++;
  }
  for (let i = 1; i < 21; i++) {
    if (2 ** i === n) return i - cnt;
  }
}
console.log(solution(8, 4, 7));

// 1 2 3 4 5 6 7 8
// 1 3 5 7

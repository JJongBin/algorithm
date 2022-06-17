function solution(n) {
  var ans = 0;
  while (n) {
    if (n % 2) {
      n--;
      ans++;
    } else n /= 2;
  }

  return ans;
}
console.log(solution(1));

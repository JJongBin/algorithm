function solution(n) {
  var answer = 0;

  let min = 1;
  let max = 1;
  let sum = 1;
  while (max <= n) {
    if (sum < n) {
      max++;
      sum += max;
    } else if (sum > n) {
      sum -= min;
      min++;
    } else {
      answer++;
      max++;
      sum += max;
      sum -= min;
      min++;
    }
  }

  return answer;
}
console.log(solution(15));

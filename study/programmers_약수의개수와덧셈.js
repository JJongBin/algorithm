function solution(left, right) {
  var answer = 0;
  const nums = new Array(right - left + 1).fill(0);
  for (let i = left; i < right + 1; i++) {
    for (let j = 1; j < parseInt(Math.sqrt(i)) + 1; j++) {
      if (!(i % j)) nums[i - left] += i / j === j ? 1 : 2;
    }
  }

  for (let i = 0; i < nums.length; i++) answer += nums[i] % 2 ? -(i + left) : i + left;
  return answer;
}
console.log(solution(13, 17));

function solution(nums) {
  var answer = 0;
  const len = nums.length / 2;

  const hash = new Set();
  for (const n of nums) hash.add(n);

  answer = hash.size < len ? hash.size : len;
  return answer;
}
console.log(solution([3, 1, 2, 3]));

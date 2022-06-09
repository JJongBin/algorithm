function solution(nums) {
  var answer = 0;

  const len = nums.length;
  const arr = [];
  const dfs = idx => {
    if (arr.length === 3) {
      const sum = arr.reduce((prev, curr) => prev + curr, 0);
      for (let i = 2; i < sum; i++) if (!(sum % i)) return;
      answer++;
      return;
    }
    for (let i = idx; i < len; i++) {
      arr.push(nums[i]);
      dfs(i + 1);
      arr.pop();
    }
  };

  dfs(0);
  return answer;
}
console.log(solution([1, 2, 3, 4]));

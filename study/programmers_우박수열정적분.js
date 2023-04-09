function solution(k, ranges) {
  var answer = [];

  const nums = [k];
  while (k > 1) {
    if (k % 2) k = k * 3 + 1;
    else k = k / 2;
    nums.push(k);
  }

  const area = [0];
  for (let i = 1; i < nums.length; i++) {
    let temp = Math.abs(nums[i - 1] - nums[i]) / 2 + Math.min(nums[i - 1], nums[i]);
    area.push(area[area.length - 1] + temp);
  }

  const n = area.length;
  for (const range of ranges) {
    const [r1, r2] = range;
    if (n + r2 < 0) answer.push(-1);
    else {
      const num = area[n + r2 - 1] - area[r1];
      answer.push(num >= 0 ? num : -1);
    }
  }

  return answer;
}

console.log(
  solution(5, [
    [0, 0],
    [0, -1],
    [2, -3],
    [3, -3],
  ])
);

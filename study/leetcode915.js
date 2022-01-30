var partitionDisjoint = function (nums) {
  var answer = 0;

  let left = nums[0];
  let right = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < left) {
      answer = i + 1;
      left = right;
    }
    if (nums[i] > right) right = nums[i];
  }
  return answer;
};

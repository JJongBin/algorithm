var maxArea = function (height) {
  let max = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    max = Math.max(Math.min(height[left], height[right]) * (right - left), max);
    height[left] < height[right] ? left++ : right--;
  }
  return max;
};

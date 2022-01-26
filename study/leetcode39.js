var combinationSum = function (candidates, target) {
  let answer = [];
  let tmp = [];

  function sumOfElements(nums) {
    let sum = 0;

    for (let n of nums) {
      sum += n;
    }
    return sum;
  }
  function DFS(tmp, s) {
    if (sumOfElements(tmp) > target) return;
    if (sumOfElements(tmp) === target) {
      answer.push(tmp.slice());
      return;
    }
    for (let i = s; i < candidates.length; i++) {
      tmp.push(candidates[i]);
      DFS(tmp, i);
      tmp.pop();
    }
  }
  DFS(tmp, 0);
  return answer;
};

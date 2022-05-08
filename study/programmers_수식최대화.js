function solution(expression) {
  var answer = 0;
  const nums = expression.split(/[\-\*\+]/);
  const operator = expression.split(/\d+/);
  operator.shift();
  operator.pop();
  const operatorType = [
    ['*', '+', '-'],
    ['*', '-', '+'],
    ['+', '*', '-'],
    ['+', '-', '*'],
    ['-', '*', '+'],
    ['-', '+', '*'],
  ];

  const combi = (type, nums, operator) => {
    for (const t of type) {
      for (let i = 0; i < operator.length; i++) {
        while (t === operator[i]) {
          nums[i] = eval(nums[i] + t + nums[i + 1]);
          nums.splice(i + 1, 1);
          operator.splice(i, 1);
        }
      }
    }
    answer = Math.max(answer, Math.abs(nums[0]));
  };

  for (const o of operatorType) combi(o, [...nums], [...operator]);

  return answer;
}
console.log(solution('100-200*300-500+20'));

function solution(s) {
  const stack = [];
  for (const bracket of s) {
    if (stack.length && stack[stack.length - 1] === '(' && bracket === ')') stack.pop();
    else stack.push(bracket);
  }
  return stack.length ? false : true;
}
console.log(solution('()()'));

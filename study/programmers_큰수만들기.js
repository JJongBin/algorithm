function solution(number, k) {
  const len = number.length;
  const stack = [];
  let cnt = 0;
  for (let i = 0; i < number.length; i++) {
    while (stack.length && cnt < k) {
      if (stack[stack.length - 1] < number[i]) {
        stack.pop();
        cnt++;
      } else break;
    }
    if (stack.length < len - k) stack.push(number[i]);
  }
  return stack.join('');
}
console.log(solution('1924', 2));

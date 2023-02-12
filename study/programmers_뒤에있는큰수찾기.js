function solution(numbers) {
  const len = numbers.length;
  var answer = new Array(len);
  const stack = [];

  for (let i = 0; i < len; i++) {
    while (stack.length) {
      if (numbers[stack[stack.length - 1]] >= numbers[i]) break;
      answer[stack.pop()] = numbers[i];
    }
    stack.push(i);
  }

  for (const idx of stack) answer[idx] = -1;

  return answer;
}

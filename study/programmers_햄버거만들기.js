function solution(ingredient) {
  var answer = 0;

  const stack = [];
  for (const i of ingredient) {
    stack.push(i);

    if (stack.length >= 4 && stack[stack.length - 1] === 1) {
      if (stack[stack.length - 2] === 3 && stack[stack.length - 3] === 2 && stack[stack.length - 4] === 1) {
        for (let k = 0; k < 4; k++) stack.pop();
        answer += 1;
      }
    }
  }

  return answer;
}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]));

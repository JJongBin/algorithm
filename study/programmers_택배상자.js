function solution(order) {
  var answer = 0;

  const len = order.length;
  const stack = [];

  let idx = 0;
  for (let i = 1; i < len + 1; i++) {
    if (order[idx] === i) idx++;
    else stack.push(i);

    while (stack[stack.length - 1] === order[idx] && stack.length) {
      stack.pop();
      idx++;
    }
  }

  answer = idx;
  return answer;
}

console.log(solution([4, 3, 1, 2, 5]));
console.log(solution([5, 4, 3, 2, 1]));

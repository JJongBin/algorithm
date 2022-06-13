function solution(s) {
  var answer = 0;

  const check = str => {
    const stack = [];
    for (const s of str) {
      if (s === '(' || s === '[' || s === '{') stack.push(s);
      else {
        if (!stack.length) return false;
        else {
          if (stack[stack.length - 1] === '(' && s === ')') stack.pop();
          else if (stack[stack.length - 1] === '[' && s === ']') stack.pop();
          else if (stack[stack.length - 1] === '{' && s === '}') stack.pop();
        }
      }
    }
    return stack.length ? false : true;
  };

  for (let i = 0; i < s.length; i++) {
    const end = s.substr(0, i);
    const front = s.substr(i);
    if (check(front + end)) answer++;
  }

  return answer;
}
console.log(solution('[](){}'));

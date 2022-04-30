function solution(p) {
  var answer = '';

  const answerArr = [];
  const converter = () => {
    const stack = [];
    let flag = false;
    let left = 0;
    let right = 0;
    for (let i = 0; i < p.length; i++) {
      if (!stack.length) {
        if (p[i] === '(') left++;
        else if (p[i] === ')') {
          flag = true;
          right++;
        }
        stack.push(p[i]);
      } else {
        if (left - right === 1 && p[i] === ')') {
          stack.push(p[i]);
          answerArr.push(stack.join(''));
          p = p.slice(i + 1);
          if (p) converter(p);
          return;
        } else {
          if (p[i] === '(') left++;
          else if (p[i] === ')') right++;
          stack.push(p[i]);
        }
      }
      if (left && left === right && flag) {
        const tempArr = [];
        for (let j = 1; j < stack.length - 1; j++) {
          if (stack[j] === '(') tempArr.push(')');
          else tempArr.push('(');
        }
        p = p.slice(i + 1);
        answerArr.push('(');
        if (p) converter(p);
        answerArr.push(')');
        answerArr.push(tempArr.join(''));
        return;
      }
    }
  };

  converter(p);
  answer = answerArr.join('');
  return answer;
}
console.log(solution('(()())()'));
console.log(solution('()))((()'));
console.log(solution(')('));
console.log(solution('))))(((('));

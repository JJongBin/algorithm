var decodeString = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);
    if (stack[stack.length - 1] === ']') {
      let temp = '';
      stack.pop();
      while (stack[stack.length - 1] !== '[') {
        temp = stack.pop() + temp;
      }
      stack.pop();
      let value = '';
      while (!isNaN(parseInt(stack[stack.length - 1]))) {
        value = stack.pop() + value;
      }
      stack.push(temp.repeat(parseInt(value)));
    }
  }
  return stack.join('');
};

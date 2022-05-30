var minimizeResult = function (expression) {
  const len = expression.length;
  let min = Infinity;
  let answer = '';
  const plus = expression.indexOf('+');
  for (let i = 0; i < plus; i++) {
    for (let j = plus + 2; j < len + 1; j++) {
      const temp1 = expression.slice(0, i);
      let temp2 = expression.slice(i, j);
      temp2 = '(' + temp2 + ')';
      let temp = temp2;
      const temp3 = expression.slice(j, len);
      if (temp1) temp = '*' + temp;
      if (temp3) temp = temp + '*';

      const str = temp1 + temp + temp3;

      if (eval(str) < min) {
        answer = temp1 + temp2 + temp3;
        min = eval(str);
      }
    }
  }
  return answer;
};
console.log(minimizeResult('247+38'));
console.log(minimizeResult('999+999'));

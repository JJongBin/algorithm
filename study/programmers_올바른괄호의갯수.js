function solution(n) {
  var answer = 0;

  const Parenthesis = [];
  const findCnt = (str, open, close, n) => {
    if (close === n) {
      Parenthesis.push(str);
      return;
    }
    if (open < n) {
      findCnt(str + '(', open + 1, close, n);
    }
    if (close < open) {
      findCnt(str + ')', open, close + 1, n);
    }

    return Parenthesis.length;
  };

  answer = findCnt('', 0, 0, n);

  return answer;
}

console.log(solution(4));

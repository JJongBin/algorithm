function solution(n) {
  var answer = [];

  const moveBlock = (n, start, mid, end) => {
    if (n === 1) answer.push([start, end]);
    else {
      moveBlock(n - 1, start, end, mid);
      answer.push([start, end]);
      moveBlock(n - 1, mid, start, end);
    }
  };

  moveBlock(n, 1, 2, 3);
  return answer;
}
console.log(solution(2));

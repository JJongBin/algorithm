function solution(arr) {
  var answer = [];

  for (const a of arr) {
    if (answer.length) {
      if (answer[answer.length - 1] === a) continue;
    }
    answer.push(a);
  }
  return answer;
}
console.log(solution([1, 1, 3, 3, 0, 1, 1]));

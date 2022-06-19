function solution(arr) {
  var answer = Math.max(...arr);
  outer: while (true) {
    for (const n of arr) {
      if (answer % n) {
        answer++;
        continue outer;
      }
    }
    break;
  }
  return answer;
}
console.log(solution([2, 6, 8, 14]));

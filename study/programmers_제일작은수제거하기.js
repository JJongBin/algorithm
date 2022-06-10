function solution(arr) {
  var answer = [];
  const min = Math.min(...arr);
  for (const a of arr) if (a !== min) answer.push(a);
  return answer.length ? answer : [-1];
}
console.log(solution([4, 3, 2, 1]));

function solution(numbers) {
  var answer = 0;

  const hash = new Set();
  for (const n of numbers) hash.add(n);
  for (let i = 0; i < 10; i++) if (!hash.has(i)) answer += i;

  return answer;
}
console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));

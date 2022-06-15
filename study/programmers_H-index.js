function solution(citations) {
  citations.sort((a, b) => b - a);
  let h = 0;
  while (h < citations[h]) h++;

  return h;
}
console.log(solution([3, 0, 6, 1, 5]));
console.log(solution([6, 6, 6]));

function solution(clothes) {
  var answer = 1;
  const hash = new Map();

  for (const [cloth, type] of clothes) hash.set(type, (hash.get(type) || 0) + 1);
  for (const h of [...hash]) answer *= h[1] + 1;

  return answer - 1;
}
console.log(
  solution([
    ['yellowhat', 'headgear'],
    ['bluesunglasses', 'eyewear'],
    ['green_turban', 'headgear'],
  ])
);

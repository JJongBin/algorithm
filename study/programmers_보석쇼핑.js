function solution(gems) {
  var answer = [];
  const len = gems.length;
  const hash = new Map();
  for (const g of gems) hash.set(g, (hash.get(g) || 0) + 1);

  let compare = len;
  const check = new Map();
  let left = 0;
  const num = hash.size;
  for (let right = 0; right < len; right++) {
    check.set(gems[right], (check.get(gems[right]) || 0) + 1);
    while (check.size === num) {
      if (right - left < compare) {
        compare = right - left;
        answer = [left + 1, right + 1];
      }
      check.set(gems[left], check.get(gems[left]) - 1);
      if (!check.get(gems[left])) check.delete(gems[left]);
      left++;
    }
  }

  return answer;
}

console.log(solution(['DIA', 'RUBY', 'RUBY', 'DIA', 'DIA', 'EMERALD', 'SAPPHIRE', 'DIA']));

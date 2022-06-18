function solution(skill, skill_trees) {
  var answer = 0;

  const skillOrder = new Map();
  for (let i = 1; i < skill.length + 1; i++) skillOrder.set(skill[i], i);

  outer: for (const skill_tree of skill_trees) {
    const hash = new Set();
    for (const s of skill_tree) {
      if (skillOrder.get(s)) {
        if (!hash.has(skill[skillOrder.get(s) - 1])) continue outer;
      }
      hash.add(s);
    }
    answer++;
  }

  return answer;
}
console.log(solution('CBD', ['BACDE', 'CBADF', 'AECB', 'BDA']));

function solution(orders, course) {
  var answer = [];

  const dfs = (order, menus, k, idx, hash) => {
    if (menus.length === k) {
      const str = [...menus].sort().join('');
      hash.set(str, (hash.get(str) || 0) + 1);
    } else {
      for (let i = idx; i < order.length; i++) {
        if (!check[i]) {
          check[i] = 1;
          menus.push(order[i]);
          dfs(order, menus, k, i + 1, hash);
          menus.pop();
          check[i] = 0;
        }
      }
    }
    return;
  };

  const check = new Array(26).fill(0);
  for (const k of course) {
    const hash = new Map();
    for (const order of orders) {
      dfs(order, [], k, 0, hash);
    }
    let maxCnt = Math.max(...hash.values(), 2);
    for (const [k, v] of hash.entries()) {
      if (maxCnt === v) answer.push(k);
    }
  }

  return answer.sort();
}
// console.log(solution(['ABCFG'], [2, 3, 4]));
// console.log(solution(['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'], [2, 3, 4]));
// console.log(solution(['ABCDE', 'AB', 'CD', 'ADE', 'XYZ', 'XYZ', 'ACD'], [2, 3, 5]));
console.log(solution(['XYZ', 'XWY', 'WXA'], [2, 3, 4]));

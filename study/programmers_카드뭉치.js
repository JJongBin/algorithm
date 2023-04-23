function solution(cards1, cards2, goal) {
  for (const target of goal) {
    if (cards1.length && cards1[0] === target) {
      cards1.shift();
      continue;
    } else if (cards2.length && cards2[0] === target) {
      cards2.shift();
      continue;
    }

    return 'No';
  }
  return 'Yes';
}

console.log(solution(['i', 'drink', 'water'], ['want', 'to'], ['i', 'want', 'to', 'drink', 'water']));

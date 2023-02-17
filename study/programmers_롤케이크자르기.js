function solution(topping) {
  var answer = 0;

  const toppingHash1 = new Map();
  const toppingHash2 = new Map();

  for (const t of topping) {
    toppingHash1.set(t, (toppingHash1.get(t) || 0) + 1);
  }

  for (const t of topping) {
    toppingHash1.set(t, toppingHash1.get(t) - 1);
    if (!toppingHash1.get(t)) toppingHash1.delete(t);

    toppingHash2.set(t, (toppingHash2.get(t) || 0) + 1);

    if (toppingHash1.size === toppingHash2.size) answer += 1;
  }

  return answer;
}

console.log(solution([1, 2, 1, 3, 1, 4, 1, 2]));

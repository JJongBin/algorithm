function solution(N, number) {
  var answer = -1;
  if (N === number) return 1;
  const canMakeNum = [...Array(9)].map((_, i) => new Set([parseInt(String(N).repeat(i))]));

  for (let i = 1; i < 9; i++) {
    for (let j = 1; j < i + 1; j++) {
      for (const num1 of canMakeNum[j]) {
        for (const num2 of canMakeNum[i - j]) {
          canMakeNum[i].add(num1 + num2);
          canMakeNum[i].add(num1 * num2);
          if (num2) canMakeNum[i].add(Math.floor(num1 / num2));
          if (num1 - num2 > 0) canMakeNum[i].add(num1 - num2);
        }
      }
    }

    if (canMakeNum[i].has(number)) {
      answer = i;
      break;
    }
  }

  return answer;
}

console.log(solution(5, 12));
console.log(solution(2, 11));

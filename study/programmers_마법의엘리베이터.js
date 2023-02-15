function solution(storey) {
  var answer = 0;
  const arr = String(storey).split('').map(Number);

  while (arr.length) {
    const n = arr.pop();

    if (n > 5) {
      answer += 10 - n;
      if (arr.length) arr[arr.length - 1] += 1;
      else answer += 1;
    } else if (n === 5 && arr.length) {
      if (arr[arr.length - 1] >= 5) arr[arr.length - 1] += 1;
      answer += n;
    } else {
      answer += n;
    }
  }

  return answer;
}

console.log(solution(16));
console.log(solution(2554));
console.log(solution(55555));
// console.log(solution(111112));
// console.log(solution(10000000000000));

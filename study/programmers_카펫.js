function solution(brown, yellow) {
  var answer = [];
  const brownLen = brown - 4;
  for (let i = 1; i < brownLen / 2; i++) {
    const hori = (brownLen - i * 2) / 2;
    if (hori * i === yellow) return [hori + 2, i + 2];
  }
  return answer;
}
console.log(solution(10, 2));

function solution(n) {
  var answer = 0;
  let erasto = new Array(n + 1).fill(true);
  for (let i = 2; i <= parseInt(Math.sqrt(n)); i++) {
    if (erasto[i] === false) continue;
    else {
      for (let j = 2; j < n; j++) {
        if (i * j > n) break;
        else erasto[i * j] = false;
      }
    }
  }

  for (let i = 2; i < n + 1; i++) if (erasto[i]) answer++;
  return answer;
}
console.log(solution(10));

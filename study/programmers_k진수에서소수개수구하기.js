function solution(n, k) {
  var answer = 0;

  const changeN = n.toString(k).split(/0/).map(Number);
  const isPrime = num => {
    if (num === 2) return true;
    for (let i = 2; i < Math.sqrt(num) + 1; i++) {
      if (!(num % i)) return false;
    }
    return true;
  };

  for (const c of changeN) {
    if (c < 2) continue;
    if (isPrime(c)) answer++;
  }

  return answer;
}
console.log(solution(1, 2));
console.log(solution(437674, 3));
console.log(solution(110011, 10));

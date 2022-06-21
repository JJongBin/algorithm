function solution(begin, end) {
  var answer = [];
  const check = num => {
    for (let i = 2; i <= Math.ceil(Math.sqrt(num)); i++) {
      if (!(num % i) && num / i <= 10000000) return num / i;
    }
    return 1;
  };

  for (let i = begin; i < end + 1; i++) {
    if (i === 1) answer.push(0);
    else answer.push(check(i));
  }

  return answer;
}
console.log(solution(1, 10));

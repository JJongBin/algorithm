function solution(numbers) {
  var answer = 0;
  const len = numbers.length;
  const hash = new Set();
  const check = new Array(len).fill(0);

  const makeNum = num => {
    if (num) hash.add(+num);
    for (let i = 0; i < len; i++) {
      if (check[i]) continue;
      check[i] = 1;
      makeNum(num + numbers[i]);
      check[i] = 0;
    }
  };
  makeNum('');

  outer: for (const n of hash) {
    if (n === 1 || n === 0) continue;
    if (n === 2) answer++;
    for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
      if (!(n % i)) continue outer;
    }
    answer++;
  }

  return answer;
}
console.log(solution('421'));

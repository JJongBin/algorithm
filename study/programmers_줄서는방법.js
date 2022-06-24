function solution(n, k) {
  var answer = [];
  const nums = new Set();
  const check = new Array(n + 1).fill(0);
  check[1] = 1;
  for (let i = 1; i < n + 1; i++) nums.add(i);
  k--;

  const factorial = n => {
    if (!n) return 0;
    if (check[n]) return check[n];

    let num = 1;
    for (let i = n; i >= 1; i--) num *= i;
    check[n] = num;
    return num;
  };

  for (let i = 1; i < n + 1; i++) {
    let num = Math.min(...nums);
    const temp = factorial(n - i);

    if (k / temp > 0 && temp) {
      let cnt = Math.floor(k / temp);
      k = k % temp;
      num = [...nums][cnt];
    }

    nums.delete(num);
    answer.push(num);
  }

  return answer;
}
console.log(solution(4, 1));
console.log(solution(4, 2));
console.log(solution(4, 3));
console.log(solution(4, 4));
console.log(solution(4, 5));
console.log(solution(4, 6));
console.log(solution(4, 7));
console.log(solution(4, 8));
console.log(solution(4, 9));
console.log(solution(4, 10));
console.log(solution(3, 5));

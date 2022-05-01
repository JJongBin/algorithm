function solution(n, arr1, arr2) {
  var answer = [];
  const map = [...Array(n)].map(_ => new Array(n).fill(' '));

  const check = arr => {
    for (let i = 0; i < n; i++) {
      const binaryNum = arr[i].toString(2).padStart(n, 0);
      for (let j = n - 1; j >= 0; j--) {
        if (+binaryNum[j]) map[i][j] = '#';
      }
    }
  };

  check(arr1);
  check(arr2);

  for (const m of map) answer.push(m.join(''));
  return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));

function solution(arr1, arr2) {
  var answer = [];
  const len = arr1[0].length;
  for (let i = 0; i < arr1.length; i++) {
    const temp = [];
    for (let j = 0; j < arr2[0].length; j++) {
      let num = 0;
      for (let k = 0; k < len; k++) num += arr1[i][k] * arr2[k][j];
      temp.push(num);
    }
    answer.push(temp);
  }
  return answer;
}
console.log(
  solution(
    [
      [1, 2, 3],
      [4, 5, 6],
    ],
    [
      [1, 2],
      [3, 4],
      [5, 6],
    ]
  )
);

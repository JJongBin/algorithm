function solution(arr) {
  var answer = [0, 0];

  const checkBinary = (x, y, lenX, lenY) => {
    let flag = true;
    outer: for (let i = x; i < x + lenX; i++) {
      for (let j = y; j < y + lenY; j++) {
        if (arr[x][y] !== arr[i][j]) {
          flag = false;
          break outer;
        }
      }
    }

    if (flag) {
      answer[arr[x][y]]++;
      return;
    }
    if (lenX > 1 && lenY > 1) {
      checkBinary(x, y, lenX / 2, lenY / 2);
      checkBinary(x, y + lenY / 2, lenX / 2, lenY / 2);
      checkBinary(x + lenX / 2, y, lenX / 2, lenY / 2);
      checkBinary(x + lenX / 2, y + lenY / 2, lenX / 2, lenY / 2);
    }
  };

  checkBinary(0, 0, arr.length, arr[0].length);
  return answer;
}
console.log(
  solution([
    [1, 1, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
  ])
);
console.log(
  solution([
    [1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 1, 1, 1],
    [0, 1, 0, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1, 0, 0, 1],
    [0, 0, 0, 0, 1, 1, 1, 1],
  ])
);

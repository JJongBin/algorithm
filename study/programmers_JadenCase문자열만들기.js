function solution(s) {
  const arr = s.split(' ');
  const temp = [];
  for (let i = 0; i < arr.length; i++) {
    let str = '';
    for (let j = 0; j < arr[i].length; j++) {
      if (+arr[i][j]) str += arr[i][j];
      else if (j) str += arr[i][j].toLowerCase();
      else str += arr[i][j].toUpperCase();
    }
    temp.push(str);
  }

  return temp.join(' ');
}
console.log(solution('3people unFollowed me'));

function solution(word) {
  var answer = 0;

  const str = {
    A: 0,
    E: 1,
    I: 2,
    O: 3,
    U: 4,
  };

  const len = word.length;
  for (let i = 0; i < len; i++) {
    let sum = 0;
    for (let j = 0; j < 5 - i; j++) sum += 5 ** j;
    answer += sum * str[word[i]] + 1;
  }

  return answer;
}
console.log(solution('EIO'));

function solution(s) {
  var answer = [];
  let words = { zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9 };

  let word = '';
  for (const str of s) {
    if (isNaN(str)) {
      word += str;
      if (words[word] !== undefined) {
        answer.push(words[word]);
        word = '';
      }
    } else {
      answer.push(+str);
    }
  }
  return +answer.join('');
}
console.log(solution('one4seveneight'));
console.log(solution('onetwothreefourfivesixseveneightninezero'));

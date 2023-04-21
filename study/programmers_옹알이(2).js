function solution(babbling) {
  var answer = 0;
  const words = ['aya', 'ye', 'woo', 'ma'];

  for (const b of babbling) {
    let str = b;

    for (const word of words) {
      const checkRegex = new RegExp(word.repeat(2));
      if (b.match(checkRegex)) break;

      const regex = new RegExp(word, 'g');
      str = str.replace(regex, '-');
    }
    if (!str.replace(/-/g, '')) answer += 1;
  }

  return answer;
}

console.log(solution(['aya', 'yee', 'u', 'maa']));
console.log(solution(['ayaye', 'uuu', 'yeye', 'yemawoo', 'ayaayaa']));

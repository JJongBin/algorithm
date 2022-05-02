function solution(str1, str2) {
  var answer = 0;

  const seperator = str => {
    const hash = new Map();
    for (let i = 0; i < str.length - 1; i++) {
      const temp = str[i].toUpperCase() + str[i + 1].toUpperCase();
      const check = temp.match(/[a-zA-Z]{2}/gi);
      if (check) hash.set(check[0], (hash.get(check[0]) || 0) + 1);
    }
    return hash;
  };

  let sumCnt = 0;
  let equalCnt = 0;

  const strHash1 = seperator(str1);
  const strHash2 = seperator(str2);

  for (const str of strHash1.keys()) {
    if (!strHash2.get(str)) sumCnt += strHash1.get(str);
  }
  for (const str of strHash2.keys()) {
    if (strHash1.get(str)) {
      sumCnt += Math.max(strHash1.get(str), strHash2.get(str));
      equalCnt += Math.min(strHash1.get(str), strHash2.get(str));
    } else sumCnt += strHash2.get(str);
  }

  answer = !equalCnt && !sumCnt ? 1 : equalCnt / sumCnt;
  return Math.floor(answer * 65536);
}
console.log(solution('FRANCE', 'french'));
console.log(solution('handshake', 'shake hands'));
console.log(solution('aa1+aa2', 'AAAA12'));
console.log(solution('E=M*C^2', 'e=m*c^2'));
console.log(solution(' abc', 'abbb'));

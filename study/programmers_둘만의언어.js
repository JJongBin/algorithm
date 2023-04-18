function solution(s, skip, index) {
  var answer = '';

  const skipSet = new Set(skip.split(''));

  for (let i = 0; i < s.length; i++) {
    let cnt = 0;
    let idx = s.charCodeAt(i);
    while (cnt < index) {
      idx = idx + 1 > 122 ? 97 : idx + 1;
      if (!skipSet.has(String.fromCharCode(idx))) cnt += 1;
    }
    answer += String.fromCharCode(idx);
  }

  return answer;
}

console.log(solution('aukks', 'wbqd', 5));

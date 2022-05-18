function solution(msg) {
  var answer = [];
  const len = msg.length;
  const hash = new Map();
  for (let i = 0; i < 26; i++) hash.set(String.fromCharCode(i + 65), i + 1);

  let idx = 0;
  let maxStr = '';
  while (idx < len) {
    let str = '';
    for (let i = idx; i < len; i++) {
      str += msg[i];
      if (hash.get(str)) maxStr = str;
      else {
        hash.set(str, hash.size + 1);
        break;
      }
    }
    answer.push(hash.get(maxStr));
    idx += maxStr.length;
  }
  return answer;
}
console.log(solution('KAKAO'));
console.log(solution('ABABABABABABABAB'));
console.log(solution('ABCDEFG'));

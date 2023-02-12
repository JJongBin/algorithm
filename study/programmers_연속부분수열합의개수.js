function solution(elements) {
  var answer = 0;

  const len = elements.length;
  const hash = new Set();
  const temp = [...elements];
  temp.pop();
  const arr = elements.concat(temp);

  for (let i = 0; i < len; i++) {
    let sum = 0;
    for (let j = i; j < i + len; j++) {
      sum += arr[j];
      hash.add(sum);
    }
  }
  answer = hash.size;
  return answer;
}

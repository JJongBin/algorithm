function solution(new_id) {
  var answer = '';
  answer = new_id
    .toLowerCase()
    .replace(/[^a-z0-9\-_.]/g, '')
    .replace(/[.]+/g, '.')
    .replace(/^[.]|[.]$/g, '');

  answer = answer.length === 0 ? 'a' : answer.slice(0, 15);
  answer = answer[answer.length - 1] === '.' ? answer.slice(0, answer.length - 1) : answer;

  answer = answer.length >= 3 ? answer : answer[1] === undefined ? answer + answer + answer : answer + answer[1];

  return answer;
}

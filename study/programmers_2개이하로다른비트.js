function solution(numbers) {
  var answer = [];
  for (const number of numbers) {
    const binaryNum = '0' + number.toString(2);
    if (binaryNum[binaryNum.length - 1] === '0') answer.push(number + 1);
    else {
      for (let i = binaryNum.length - 1; i > 0; i--) {
        if (binaryNum[i] === '1' && binaryNum[i - 1] === '0') {
          const binaryNext = binaryNum.slice(0, i - 1) + '10' + binaryNum.slice(i + 1);
          answer.push(parseInt(binaryNext, 2));
          break;
        }
      }
    }
  }
  return answer;
}
console.log(solution([2, 7, 1]));

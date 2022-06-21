function solution(n) {
  const checkOneCnt = num => {
    const binaryNum = num.toString(2);
    let cnt = 0;
    for (const b of binaryNum) if (+b) cnt++;
    return cnt;
  };

  const nCnt = checkOneCnt(n);

  n++;
  while (nCnt !== checkOneCnt(n)) {
    n++;
  }
  return n;
}
console.log(solution(78));

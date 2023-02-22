function solution(n, stations, w) {
  var answer = 0;

  stations.unshift(-w);
  stations.push(n + w + 1);

  for (let i = 0; i < stations.length - 1; i++) {
    prevStation = stations[i];
    nextStation = stations[i + 1];

    const checkRange = nextStation - prevStation - (2 * w + 1);
    if (checkRange < 1) continue;
    else answer += Math.ceil(checkRange / (2 * w + 1));
  }

  return answer;
}

console.log(solution(11, [4, 11], 1));
console.log(solution(16, [9], 2));

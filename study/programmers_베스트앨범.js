function solution(genres, plays) {
  var answer = [];

  const hash = {};

  for (let i = 0; i < genres.length; i++) {
    if (hash[genres[i]]) {
      hash[genres[i]]['total'] += plays[i];
      hash[genres[i]]['list'].push([i, plays[i]]);
    } else {
      hash[genres[i]] = { total: plays[i], list: [[i, plays[i]]] };
    }
  }

  const hashArr = Object.entries(hash).sort((a, b) => b[1]['total'] - a[1]['total']);

  for (const [genre, info] of hashArr) {
    info['list'].sort((a, b) => b[1] - a[1]);

    let cnt = 0;
    for (const [num, play] of info['list']) {
      answer.push(num);
      cnt += 1;
      if (cnt >= 2) break;
    }
  }

  return answer;
}
console.log(solution(['classic', 'pop', 'classic', 'classic', 'pop'], [500, 600, 150, 800, 2500]));

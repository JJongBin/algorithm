function solution(cacheSize, cities) {
  var answer = 0;

  const cache = [];
  if (!cacheSize) return cities.length * 5;
  for (let i = 0; i < cities.length; i++) {
    const city = cities[i].toUpperCase();
    const pos = cache.indexOf(city);
    if (pos >= 0) {
      cache.splice(pos, 1);
      answer += 1;
    } else {
      if (cache.length >= cacheSize) cache.shift();
      answer += 5;
    }
    cache.push(city);
  }
  return answer;
}
console.log(solution(3, ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA', 'Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA']));
// console.log(solution(2, ['Jeju', 'Pangyo', 'NewYork', 'newyork']));

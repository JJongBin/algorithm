function solution(book_time) {
  var answer = 0;

  const check = new Array(10000).fill(0);

  for (const time of book_time) {
    const [start, end] = time.map(t => {
      const [h, m] = t.split(':').map(Number);
      return h * 60 + m;
    });

    for (let i = start; i < end + 10; i++) {
      check[i] += 1;
      if (answer < check[i]) answer = check[i];
    }
  }

  return answer;
}

console.log(
  solution([
    ['15:00', '17:00'],
    ['16:40', '18:20'],
    ['14:20', '15:20'],
    ['14:10', '19:20'],
    ['18:20', '21:20'],
  ])
);

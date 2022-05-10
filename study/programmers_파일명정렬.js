function solution(files) {
  var answer = [];
  const sortingArr = [...files].map(item => {
    const head = item.match(/^[^\d]+/)[0].toLowerCase();
    const number = item.match(/\d{1,5}/)[0];
    return [head, number, item];
  });

  sortingArr.sort((a, b) => (a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : +a[1] < +b[1] ? -1 : +a[1] > +b[1] ? 1 : 0));
  for (const file of sortingArr) answer.push(file[2]);

  return answer;
}
console.log(solution(['img12.png', 'img10.png', 'img02.png', 'img1.png', 'IMG01.GIF', 'img2.JPG']));
console.log(solution(['d   5 d5 Freedom Fighter', 'B-50 Superfortress', 'A-10 Thunderbolt II', 'F-14 Tomcat']));

function solution(word, pages) {
  var answer = 0;
  const linkObj = {};

  for (let page of pages) {
    // 현재 링크
    const temp = page.match(/<meta property="og:url" content="https:\/\/(\S*)"/g);
    const link = temp[0].match(/"https:\/\/(\S*)"/);
    linkObj[link[0]] = {};
    linkObj[link[0]]['in'] = [];
    linkObj[link[0]]['out'] = 0;
    linkObj[link[0]]['basicScore'] = 0;
  }

  for (let page of pages) {
    const temp = page.match(/<meta property="og:url" content="https:\/\/(\S*)"/g);
    const link = temp[0].match(/"https:\/\/(\S*)"/);

    // 외부 링크
    let aLink = page.match(/<a href="https:\/\/(\S*)"/g);
    if (aLink) {
      aLink = aLink.map(item => item.replace('<a href=', ''));
      linkObj[link[0]]['out'] = aLink.length;
      for (const a of aLink) {
        if (!linkObj[a]) continue;
        linkObj[a]['in'] = [...linkObj[a]['in'], link[0]];
      }
    } else linkObj[link[0]]['out'] = [];

    // 기본점수
    let arr = page.split(/[^a-zA-Z]/);
    arr = arr.filter(item => item.toLowerCase() === word.toLowerCase());
    linkObj[link[0]]['basicScore'] = arr.length;
  }

  const infos = Object.entries(linkObj);
  let maxScore = [0, 0];
  for (let i = 0; i < infos.length; i++) {
    const info = infos[i][1];
    let score = info['basicScore'] ? info['basicScore'] : 0;

    for (const link of info['in']) {
      if (linkObj[link]['basicScore'] && linkObj[link]['out']) {
        score += linkObj[link]['basicScore'] / linkObj[link]['out'];
      }
    }
    if (maxScore[0] < score) maxScore = [score, i];
  }
  answer = maxScore[1];
  return answer;
}
console.log(
  solution('Muzi', [
    '<html lang="ko" xml:lang="ko" xmlns="http://www.w3.org/1999/xhtml">\n<head>\n  <meta charset="utf-8">\n  <meta property="og:url" content="https://careers.kakao.com/interview/list"/>\n</head>  \n<body>\n<a href="https://programmers.co.kr/learn/courses/4673"></a>#!MuziMuzi!)jayg07con&&\n\n</body>\n</html>',
    '<html lang="ko" xml:lang="ko" xmlns="http://www.w3.org/1999/xhtml">\n<head>\n  <meta charset="utf-8">\n  <meta property="og:url" content="https://www.kakaocorp.com"/>\n</head>  \n<body>\ncon%\tmuzI92apeach&2<a href="https://hashcode.co.kr/tos"></a>\n\n\t^\n</body>\n</html>',
  ])
);
console.log(
  solution('blind', [
    '<html lang="ko" xml:lang="ko" xmlns="http://www.w3.org/1999/xhtml">\n<head>\n  <meta charset="utf-8">\n  <meta property="og:url" content="https://a.com"/>\n</head>  \n<body>\nBlind Lorem Blind ipsum dolor Blind test sit amet, consectetur adipiscing elit. \n<a href="https://b.com"> Link to b </a>\n</body>\n</html>',
    '<html lang="ko" xml:lang="ko" xmlns="http://www.w3.org/1999/xhtml">\n<head>\n  <meta charset="utf-8">\n  <meta property="og:url" content="https://b.com"/>\n</head>  \n<body>\nSuspendisse potenti. Vivamus venenatis tellus non turpis bibendum, \n<a href="https://a.com"> Link to a </a>\nblind sed congue urna varius. Suspendisse feugiat nisl ligula, quis malesuada felis hendrerit ut.\n<a href="https://c.com"> Link to c </a>\n</body>\n</html>',
    '<html lang="ko" xml:lang="ko" xmlns="http://www.w3.org/1999/xhtml">\n<head>\n  <meta charset="utf-8">\n  <meta property="og:url" content="https://c.com"/>\n</head>  \n<body>\nUt condimentum urna at felis sodales rutrum. Sed dapibus cursus diam, non interdum nulla tempor nec. Phasellus rutrum enim at orci consectetu blind\n<a href="https://a.com"> Link to a </a>\n</body>\n</html>',
  ])
);

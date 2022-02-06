const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/13168.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const solve = () => {
  // 만약 한개의 도시로 가는 경우 금액은 0원이므로 No 반환
  if (+input[2] === 1) return 'No';

  const [n, ticket] = input[0].split(' ').map(Number);

  // 도시의 이름을 인덱스로 만들어줌
  const cityHash = new Map();
  const cityList = input[1].split(' ');
  for (let i = 0; i < n; i++) {
    cityHash.set(cityList[i], i);
  }

  // 기본 가격과 내일로일때의 가격 배열 생성
  const basic = new Array(n);
  const rallRoad = new Array(n);

  for (let i = 0; i < n; i++) {
    basic[i] = new Array(n).fill(Infinity);
    rallRoad[i] = new Array(n).fill(Infinity);
  }

  // 내일로 할인 교통 수단
  const free = { 'ITX-Saemaeul': true, 'ITX-Cheongchun': true, Mugunghwa: true };
  const half = { 'S-Train': true, 'V-Train': true };

  // 교통 수단 비용을 배열에 저장
  for (let i = 5; i < input.length; i++) {
    const way = input[i].split(' ');

    const from = cityHash.get(way[1]);
    const to = cityHash.get(way[2]);

    basic[from][to] = basic[to][from] = Math.min(basic[from][to], +way[3]);

    if (free[way[0]]) rallRoad[from][to] = rallRoad[to][from] = 0;
    else if (half[way[0]]) rallRoad[from][to] = rallRoad[to][from] = Math.min(rallRoad[from][to], +way[3] / 2);
    else rallRoad[from][to] = rallRoad[to][from] = Math.min(rallRoad[from][to], +way[3]);
  }

  // 최소 금액을 구해줌
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (basic[i][j] > basic[i][k] + basic[k][j]) {
          basic[i][j] = basic[i][k] + basic[k][j];
          basic[j][i] = basic[i][k] + basic[k][j];
        }
        if (rallRoad[i][j] > rallRoad[i][k] + rallRoad[k][j]) {
          rallRoad[i][j] = rallRoad[i][k] + rallRoad[k][j];
          rallRoad[j][i] = rallRoad[i][k] + rallRoad[k][j];
        }
      }
    }
  }

  // 여행할 도시 리스트
  const planCity = input[3].split(' ');

  let basicPrice = 0;
  let rallRoadPrice = 0;

  for (let i = 0; i < planCity.length - 1; i++) {
    basicPrice += basic[cityHash.get(planCity[i])][cityHash.get(planCity[i + 1])];
    rallRoadPrice += rallRoad[cityHash.get(planCity[i])][cityHash.get(planCity[i + 1])];
  }

  return basicPrice <= rallRoadPrice + ticket ? 'No' : 'Yes';
};

console.log(solve());

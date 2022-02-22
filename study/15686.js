const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/15686.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

let answer = Infinity;
let city = input.map(item => item.split(' ').map(Number));
const [n, m] = city.shift();

const homes = [];
const stores = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (city[i][j] === 1) homes.push([i, j]);
    if (city[i][j] === 2) stores.push([i, j]);
  }
}

const calcDist = stores => {
  let chickenDist = 0;
  for (let i = 0; i < homes.length; i++) {
    const arr = stores.map(stroe => Math.abs(stroe[0] - homes[i][0]) + Math.abs(stroe[1] - homes[i][1]));
    chickenDist += Math.min(...arr);
  }
  return chickenDist;
};

const storesLen = stores.length;
const check = new Array(stores.length).fill(0);

const selectStores = (storesArr, start) => {
  if (storesArr.length === m) {
    answer = Math.min(answer, calcDist(storesArr));
    return;
  }

  for (let i = start; i < storesLen; i++) {
    if (check[i] !== 1) {
      check[i] = 1;
      storesArr.push(stores[i]);
      selectStores(storesArr, i + 1);
      storesArr.pop();
      check[i] = 0;
    }
  }
};

selectStores([], 0);
console.log(answer);

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getPermutations = (arr, selectNumber) => {
  const results = [];
  if (selectNumber === 1) return arr.map(el => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, selectNumber - 1);
    const attached = permutations.map(el => [fixed, ...el]);
    results.push(...attached);
  });

  return results;
};

const getRail = (arr, check, rail) => {
  const results = [];

  for (let i = 0; i < rail.length; i++) {
    if (check[i]) continue;

    arr.push(rail[i]);
    check[i] = 1;
    if (arr.length === rail.length) results.push([...arr]);
    else {
      const res = getRail(arr, check, rail);
      for (const r of res) results.push(r);
    }

    arr.pop();
    check[i] = 0;
  }

  return results;
};

const calcWeight = (rail, n, m, k) => {
  let totalWeight = 0;
  let railNum = 0;
  let nowWeight = 0;

  for (let i = 0; i < k; i++) {
    while (nowWeight + rail[railNum] <= m) {
      nowWeight += rail[railNum];
      railNum = railNum + 1 >= n ? 0 : railNum + 1;
    }
    totalWeight += nowWeight;
    nowWeight = 0;
  }

  return totalWeight;
};

const arr = [];
const solve = () => {
  let weights = [];
  const rail = arr.pop().split(' ').map(Number);
  const [n, m, k] = arr.pop().split(' ').map(Number);

  const chcek = new Array(rail.length).fill(0);
  const permutationRails = getRail([], chcek, rail);

  for (const rail of permutationRails) {
    const weight = calcWeight(rail, n, m, k);
    weights.push(weight);
  }

  let answer = Infinity;
  for (const weight of weights) {
    if (weight < answer) answer = weight;
  }
  console.log(answer);
};

rl.on('line', line => {
  arr.push(line);

  if (arr.length === 2) solve();
});

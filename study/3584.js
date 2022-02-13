const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/3584.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input.map(item => item.split(' ').map(Number));
// console.log(input);

for (let k = 1; k < input.length; k++) {
  const n = input[k][0];

  const tree = {};
  for (let i = k + 1; i < k + n; i++) {
    tree[input[i][1]] = input[i][0];
  }

  k += n;
  let [a, b] = input[k];

  const parentA = [a];
  const parentB = [b];

  while (tree[a]) {
    parentA.push(tree[a]);
    a = tree[a];
  }

  while (tree[b]) {
    parentB.push(tree[b]);
    b = tree[b];
  }

  let compareA = parentA.pop();
  let compareB = parentB.pop();

  let result = 0;
  while (compareA === compareB) {
    result = compareA;
    compareA = parentA.pop();
    compareB = parentB.pop();
  }

  console.log(result);
}

const calcNodeCnt = binary => {
  let nodeCnt = 0;
  let depth = 0;
  while (binary.length > cnt) {
    nodeCnt += 2 ** depth;
    depth += 1;
  }

  return nodeCnt;
};

const checkTree = tree => {
  if (!tree.length) return true;

  const rootIdx = Math.floor(tree.length / 2);
  const root = tree[rootIdx];
  if (root === '0' && tree.indexOf('1') !== -1) return false;

  const leftTree = tree.slice(0, rootIdx);
  const rightTree = tree.slice(rootIdx + 1);

  return checkTree(leftTree) && checkTree(rightTree);
};

function solution(numbers) {
  var answer = [];

  for (const number of numbers) {
    const binary = number.toString(2);
    const nodeCnt = calcNodeCnt(binary);
    const completeBinary = binary.padStart(nodeCnt, '0');

    const check = checkTree(completeBinary) ? 1 : 0;
    answer.push(check ? 1 : 0);
  }

  return answer;
}

console.log(solution([58]));
console.log(solution([1]));
console.log(solution([423]));
console.log(solution([7, 42, 5]));
console.log(solution([63, 111, 95]));

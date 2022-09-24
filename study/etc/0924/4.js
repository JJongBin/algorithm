function solution(numbers) {
  var answer = [];

  outer: for (const num of numbers) {
    let binary = num.toString(2);

    let h = 0;
    while (true) {
      if (2 ** h - 1 >= binary.length) break;
      h++;
    }

    const nodeCnt = 2 ** h - 1;
    binary = binary.padStart(nodeCnt, '0');
    // console.log(binary);

    let nodes = [];
    for (let i = 0; i < nodeCnt; i++) if (!(i % 2)) nodes.push(i);

    let canCheck = true;
    outer2: while (nodes.length > 1) {
      const newNodes = [];
      for (let i = 0; i < nodes.length; i += 2) {
        const idx = (nodes[i] + nodes[i + 1]) / 2;
        // console.log(nodes);
        // console.log(idx);
        // console.log();
        if ((+binary[nodes[i]] || +binary[nodes[i + 1]]) && !+binary[idx]) {
          // console.log();
          // console.log(nodes[i], idx);

          canCheck = false;
          answer.push(0);
          break outer2;
        }
        newNodes.push(idx);
      }
      nodes = newNodes;
    }
    if (canCheck) answer.push(1);
  }
  return answer;
}
// console.log(solution([7, 5]));
// console.log(solution([95]));
// console.log(solution([63, 111, 95, 10000]));
// console.log(solution([10000]));
console.log(solution([14]));

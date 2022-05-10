function solution(n, k, cmd) {
  var answer = new Array(n).fill('O');

  function Node(idx, prevIdx) {
    this.idx = idx;
    this.prev = prevIdx;
    this.next;
  }

  const root = new Node(0);
  let nowNode = root;
  let prevNode = root;

  for (let i = 1; i < n; i++) {
    const node = new Node(i, prevNode);
    prevNode.next = node;
    prevNode = node;
    if (i === k) nowNode = node;
  }

  const deleted = [];
  for (const c of cmd) {
    if (c[0] === 'U') {
      const [command, cnt] = c.split(' ');
      for (let i = 0; i < +cnt; i++) nowNode = nowNode.prev;
    } else if (c[0] === 'D') {
      const [command, cnt] = c.split(' ');
      for (let i = 0; i < +cnt; i++) nowNode = nowNode.next;
    } else if (c[0] === 'C') {
      const delNode = nowNode;
      deleted.push(delNode);
      if (!nowNode.next) {
        nowNode = nowNode.prev;
        nowNode.next = undefined;
      } else if (!nowNode.prev) {
        nowNode = nowNode.next;
        nowNode.prev = undefined;
      } else {
        nowNode = nowNode.next;
        delNode.prev.next = delNode.next;
        delNode.next.prev = delNode.prev;
      }
    } else if (c[0] === 'Z') {
      const reNode = deleted.pop();
      if (reNode.prev) reNode.prev.next = reNode;
      if (reNode.next) reNode.next.prev = reNode;
    }
  }

  for (const node of deleted) answer[node.idx] = 'X';
  return answer.join('');
}
console.log(solution(8, 2, ['D 2', 'C', 'U 3', 'C', 'D 4', 'C', 'U 2', 'Z', 'Z']));
console.log(solution(9, 2, ['U 2', 'C', 'D 2', 'C', 'U 3', 'C', 'D 4', 'C', 'U 2', 'Z', 'Z']));

class Node {
  constructor(x, y, num) {
    this.num = num;
    this.x = x;
    this.y = y;
    this.left = null;
    this.right = null;
  }
}

const insert = (root, node) => {
  const [x, y, num] = node;

  if (x < root.x) {
    root.left = root.left ? insert(root.left, node) : new Node(x, y, num);
  } else {
    root.right = root.right ? insert(root.right, node) : new Node(x, y, num);
  }

  return root;
};

const preorderTraversal = (root, preorder) => {
  preorder.push(root.num);
  if (root.left) preorderTraversal(root.left, preorder);
  if (root.right) preorderTraversal(root.right, preorder);

  return preorder;
};

const postorderTraversal = (root, postorder) => {
  if (root.left) postorderTraversal(root.left, postorder);
  if (root.right) postorderTraversal(root.right, postorder);
  postorder.push(root.num);

  return postorder;
};

function solution(nodeinfo) {
  var answer = [];

  nodeinfo = nodeinfo.map((nodePos, i) => [...nodePos, i + 1]);
  nodeinfo.sort((a, b) => b[1] - a[1]);

  const root = new Node(...nodeinfo[0]);
  for (let i = 1; i < nodeinfo.length; i++) insert(root, nodeinfo[i]);

  const preorder = preorderTraversal(root, []);
  answer.push(preorder);

  const postorder = postorderTraversal(root, []);
  answer.push(postorder);

  return answer;
}

console.log(
  solution([
    [5, 3],
    [11, 5],
    [13, 3],
    [3, 5],
    [6, 1],
    [1, 3],
    [8, 6],
    [7, 2],
    [2, 2],
  ])
);

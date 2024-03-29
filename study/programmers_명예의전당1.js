class MinHeap {
  constructor() {
    this.heap = [];
    this.heap.push(-1e9);
  }

  insert(value) {
    this.heap.push(value);
    this.upheap(this.heap.length - 1);
  }

  upheap(pos) {
    let temp = this.heap[pos];

    while (temp < this.heap[parseInt(pos / 2)]) {
      this.heap[pos] = this.heap[parseInt(pos / 2)];
      pos = parseInt(pos / 2);
    }
    this.heap[pos] = temp;
  }

  get() {
    if (this.size() === 0) return 0;
    if (this.size() === 1) return this.heap.pop();
    const result = this.heap[1];
    this.heap[1] = this.heap.pop();
    this.downheap(1, this.heap.length - 1);
    return result;
  }

  downheap(pos, len) {
    let temp = this.heap[pos],
      child;
    while (pos <= parseInt(len / 2)) {
      child = pos * 2;
      if (child < len && this.heap[child] > this.heap[child + 1]) child++;
      if (temp <= this.heap[child]) break;
      this.heap[pos] = this.heap[child];
      pos = child;
    }
    this.heap[pos] = temp;
  }

  show() {
    return this.heap[1];
  }

  size() {
    return this.heap.length - 1;
  }
}

function solution(k, score) {
  var answer = [];

  const hallOfFame = new MinHeap();

  for (const s of score) {
    hallOfFame.insert(s);
    if (hallOfFame.size() > k) hallOfFame.get();

    answer.push(hallOfFame.show());
  }

  return answer;
}

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]));

var nthUglyNumber = function (n) {
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
      if (this.size() === 0) return false;
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

    size() {
      return this.heap.length - 1;
    }
  }

  const heap = new MinHeap();
  const check = new Set();
  const calc = (num) => {
    if (!check.has(num * 2)) {
      check.add(num * 2);
      heap.insert(num * 2);
    }
    if (!check.has(num * 3)) {
      check.add(num * 3);
      heap.insert(num * 3);
    }
    if (!check.has(num * 5)) {
      check.add(num * 5);
      heap.insert(num * 5);
    }
    return heap.get();
  };

  const arr = new Set();

  arr.add(1);
  let temp = 1;
  let cnt = 1;
  while (cnt < n) {
    temp = calc(temp);
    cnt++;
    arr.add(temp);
  }

  return temp;
};
console.log(nthUglyNumber(1352));

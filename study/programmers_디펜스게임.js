function solution(n, k, enemy) {
  class MaxHeap {
    constructor() {
      this.heap = [];
      this.heap.push(1e9);
    }

    insert(value) {
      this.heap.push(value);
      this.upheap(this.heap.length - 1);
    }

    upheap(pos) {
      let temp = this.heap[pos];
      while (temp > this.heap[parseInt(pos / 2)]) {
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
        if (child < len && this.heap[child] < this.heap[child + 1]) child++;
        if (temp >= this.heap[child]) break;
        this.heap[pos] = this.heap[child];
        pos = child;
      }
      this.heap[pos] = temp;
    }

    size() {
      return this.heap.length - 1;
    }
  }

  const heap = new MaxHeap();
  let sum = 0;

  for (let i = 0; i < enemy.length; i++) {
    sum += enemy[i];
    heap.insert(enemy[i]);

    while (sum > n && k > 0) {
      const num = heap.get();
      sum -= num;
      k--;
    }

    if (n < sum && k <= 0) return i;
  }

  return enemy.length;
}

console.log(solution(7, 3, [4, 2, 4, 5, 3, 3, 1]));
console.log(solution(7, 3, [1, 1, 1, 1, 1, 1, 1]));

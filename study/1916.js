const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/1916.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n');

// MinHeap

class minHeap{
    constructor(){
        this.heap=[];
        this.heap.push([Number.MIN_SAFE_INTEGER, 0]);
    }
    insert([a, b]){
        this.heap.push([a, b]);
        this.upheap(this.heap.length-1);
    }
    upheap(pos){
        let tmp=this.heap[pos];
        while(tmp[1]<this.heap[parseInt(pos/2)][1]){
            this.heap[pos]=this.heap[parseInt(pos/2)];
            pos=parseInt(pos/2);
        }
        this.heap[pos]=tmp;
    }
    get(){
        if(this.heap.length===2){
            return this.heap.pop();
        }
        let res;
        res=this.heap[1];
        this.heap[1]=this.heap.pop();
        this.downheap(1, this.heap.length-1);
        return res;
    }
    downheap(pos, len){
        let tmp, i;
        tmp=this.heap[pos];
        while(pos<=parseInt(len/2)){
            i=pos*2;
            if(i<len && this.heap[i][1]<this.heap[i+1][1]) i++;
            if(tmp[1]<=this.heap[i][1]) break;
            this.heap[pos]=this.heap[i];
            pos=i;
        }
        this.heap[pos]=tmp;
    }
    size(){
        return this.heap.length-1;
    }
    top(){
        return this.heap[1];
    }
}



const n = parseInt(input[0]);
const m = parseInt(input[1]);
const [start, finish] = input.pop().split(" ").map(item => +item);
const arr = input.slice(2).map(item => item.split(" ").map(item2 => +item2));
let answer = 0;
const heap = new minHeap();

const graph = new Array(n+1);
const dist = new Array(n+1).fill(Number.MAX_VALUE);
for (let i = 0; i < n+1; i++){
    graph[i] = new Array();
}
for(let i = 0; i < arr.length; i++){
    // graph[arr[i][0]][arr[i][1]] = arr[i][2];
    graph[arr[i][0]].push([arr[i][1], arr[i][2]]);
}

dist[1] = 0;
heap.insert([start, 0]);

while(heap.size() > 0){
    let temp = heap.get();
    let now = temp[0];
    let nowCost = temp[1];

    if(nowCost > dist[now]) continue;
    for(const [next, cost] of graph[now]){
        if(nowCost + cost < dist[next]){
            dist[next] = nowCost + cost;
            heap.insert([next, dist[next]]);
            // console.log(heap)
            // console.log(dist)
        }
    }
}
answer = dist[finish];

console.log(answer);













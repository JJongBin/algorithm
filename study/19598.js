const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../testcase/19598.txt';

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);

// 회의의 시작시간을 기준으로 오름차순 정렬
const time = input.slice(1).map(item => item.split(" ").map(item2 => +item2));
time.sort((a, b) => a[0] - b[0]);


// Min Heap 사용
class MinHeap{
    constructor() {
        this.heap = [];
        this.heap.push(-1e9);    // 큰 값을 제일 앞에 넣어준다
    }

    // heap에 데이터를 삽입
    insert(value){
        this.heap.push(value);
        // 값이 들어오면 작거나 큼에 따라 위로 올려준다
        this.upheap(this.heap.length - 1);
    }


    // insert된 값을 올려주는 메소드
    upheap(pos){
        // 마지막으로 들어온 값을 temp에 할당
        let temp = this.heap[pos];

        // 부모노드와 비교하며 현시점의 부모보다 크면 부모노드의 값을 아래로 내림
        while(temp < this.heap[parseInt(pos/2)]){
            this.heap[pos] = this.heap[parseInt(pos/2)];
            pos = parseInt(pos/2);
        }
        // 마지막으로 현시점의 노드에 temp값을 넣어준다
        this.heap[pos] = temp;
    }


    // 루트노드를 가져오는 메소드
    get(){
        // 만약 heap의 크기가 0인데 pop을 하려고 하면 false반환
        if (this.size() === 0) return false;
        // 만약 heap의 크기가 2라면 downheap()을 하지않고 pop만 수행
        if (this.size() === 1) return this.heap.pop();
        // 루트노드값을 result 변수에 임시저장하고, 루트노드 자리에 제일 마지막 노드를 위치시킨다
        const result = this.heap[1];
        this.heap[1] = this.heap.pop();
        // 아래로 진행하면서 자리배치
        this.downheap(1, this.heap.length-1);
        return result;
    }

    downheap(pos, len){
        // 루트노드에 위치한 값을 임시 저장
        let temp = this.heap[pos], child;
        while(pos <= parseInt(len/2)){
            child = pos * 2;        // 왼쪽 자식
            // 자식노드가 하나만 존재할 수 있기 때문에 child < len
            if(child < len && this.heap[child] > this.heap[child+1]) child++;      // +1로 오른쪽자식과 비교한다 
            // 자식노드보다 크다면 멈춘다
            if(temp <= this.heap[child]) break;
            // 자식노드와 부모노드의 자리를 교환
            this.heap[pos] = this.heap[child];
            // 인덱스를 아래로 옮김
            pos = child;
        }
        // 현재 시점의 노드에 값 할당
        this.heap[pos] = temp;
    }

    check(){
        return this.heap[1];
    }
    
    // heap의 크기를 반환하는 메서드
    size(){
        return this.heap.length-1;
    }
}

// heap에 존재하는 갯수는 각각 회의실을 사용하고 있는것!
const heap = new MinHeap();
heap.insert(time[0][1]);

// heap의 check 메서드로 heap에서 가장 작은 값을 확인
for(let i = 1; i < time.length; i++){
    // 만약 가장 작은값(빨리 끝나는 회의)이 회의를 해야하는 시각보다 크면 다른 회의실을 사용
    if(heap.check() > time[i][0]){
        heap.insert(time[i][1]);
    
    // 가장 빨리 끝나는 회의의 끝나는 시각이 더 작으면 해당 회의실에서 회의 할 수 있음
    }else{
        heap.get();
        heap.insert(time[i][1]);
    }
}

// heap에 들어있는 개수 - 사용하고 있는 회의실의 수
console.log(heap.size());


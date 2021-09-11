const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './3_11866.txt';

let input = fs.readFileSync(filePath).toString().trim().split(" ");

const n = parseInt(input[0]);
const k = parseInt(input[1]);

class Circle {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    push(data) {
        const node = { data };
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        }else {
            this.tail.next = node;
            this.tail = node;
            this.tail.next = this.head;
        }
        this.size++;
    }

    pop(num) {
        const result = [];
        let cur_noed = null;
        let temp_node = null
        while(this.size > 0) {
            if (num === 1){
                if (cur_noed === null){
                    cur_noed = this.head
                } else {
                    cur_noed = cur_noed.next
                }
            } else {
                if (cur_noed === null){
                    cur_noed = this.head
                    for (let i = 0; i < num-1; i++) {
                        temp_node = cur_noed;
                        cur_noed = cur_noed.next;
                    }
                }
                else {
                    for (let i = 0; i < num; i++) {
                        temp_node = cur_noed;
                        cur_noed = cur_noed.next;
                    }
                }
                temp_node.next = cur_noed.next;
            }
            result.push(cur_noed.data)
            this.size--;
        }
        return result;
    }
}


const circle = new Circle();
for (let i = 1; i < n+1; i++){
    circle.push(i);
}

console.log(`<${circle.pop(k).join(", ")}>`);




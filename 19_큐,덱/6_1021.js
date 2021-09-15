const fs = require("fs");
const filePath = process.platform === 'linux' ? "/dev/stdin" : "./6_1021.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0].split(" ")[0]);
const m = parseInt(input[0].split(" ")[1]);

let target = input[1].split(" ").map(item => +item);
let result = 0;

// console.log(n, m);
// console.log(target);

let queue = [];
for (let i = 1; i < n+1; i++){
    queue.push(i);
}

let idx = 0;
while(target.length > 0) {
    if (target[0] === queue[0]){
        target.shift();
        queue.shift();
    } else{
        idx = queue.indexOf(target[0]) 
        // console.log(idx)
        // console.log(target)
        if(idx < queue.length-idx) {
            queue.push(queue.shift())
            result++;
            // console.log(queue)
        } else{
            queue.splice(0, 0, queue.pop());
            result++;
            // console.log(queue)
        }
    }
}
console.log(result);
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/17017.txt';

let input = fs.readFileSync(filePath).toString().trim().split(" ");

const n = parseInt(input[0]);
let k = parseInt(input[1]);


// console.log(n, k)

const check = Array.from({ length: 500001 }, () => new Array(2).fill(0));
const queue = [];

const bfs = () => {
    queue.push(n);
    let L = 0;
    check[n][0] = 1;

    while(queue.length !== 0){
        k += L;
        let len = queue.length;
        if(k > 500000) return -1
        if(check[k][L%2] === 1) {
            console.log(check[15])
            return L;
        }
        for(let i = 0; i < len; i++){
            let x = queue.shift();
            
            if(x === 15){
                console.log(check[x])
                console.log(x, k, queue);
            }
            if(x === k) {
                console.log(x, k);
                return L;
            }
            for(let nx of [x-1, x+1, 2*x]){
                if(nx >= 0 && nx < 500001 && check[nx][L%2] === 0){
                // if(nx >= 0 && nx < 500001){
                    check[nx][L%2] = 1;
                    queue.push(nx);
                }
            }
        }
        L++;
        
    }
}
const answer = bfs();
console.log(answer);




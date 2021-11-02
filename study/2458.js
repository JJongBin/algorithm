const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/2458.txt';

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0].split(" ")[0]);
const m = parseInt(input[0].split(" ")[1]);

input = input.slice(1).map(item => item.split(" ").map(item2 => +item2));

let answer = 0;
const dy = new Array(n+1);
for(let i = 0; i < n+1; i++){
    dy[i] = new Array(n+1).fill(10);
}
for(let i = 1; i < n+1; i++){
    dy[i][i] = 0;
}
for(const [a, b] of input){
    dy[a][b] = 1;
}
for(let k = 1; k < n+1; k++){
    for(let i = 1; i < n+1; i++){
        for(let j = 1; j < n+1; j++){
            if(dy[i][k] + dy[k][j] === 2){
                dy[i][j] = 1;
            }
        }
    }
}
const dist = new Array(n+1).fill(0);
for(let i = 1; i < n+1; i++){
    for(let j = 1; j < n+1; j++){
        if(dy[i][j] === 1){
            dist[i] += 1;
            dist[j] += 1;
        }
    }
}
for(let i = 0; i < n+1; i++){
    if(dist[i] === n - 1)answer++;
}
console.log(answer)
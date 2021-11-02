const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/4485.txt';

const input = fs.readFileSync(filePath).toString().trim().split("\n");



const solve = (n, arr) => {
    const dist = new Array(n);
    for(let k = 0; k < n; k++){
        dist[k] = new Array(n).fill(Number.MAX_SAFE_INTEGER);
    }
    const queue = [];
    const dx = [0, 1, 0, -1];
    const dy = [-1, 0, 1, 0];
    let x = 0;
    let y = 0;

    queue.push([0, 0]);
    dist[0][0] = arr[0][0];
    while(queue.length > 0){
        let temp = queue.shift();
        let x = temp[0];
        let y = temp[1];
        for(let k = 0; k < 4; k++){
            let xx = x + dx[k];
            let yy = y + dy[k];
            if(xx >= 0 && xx < n && yy >= 0 && yy < n){
                if(dist[xx][yy] > arr[xx][yy] + dist[x][y]){
                    dist[xx][yy] = arr[xx][yy] + dist[x][y];
                    queue.push([xx, yy]);
                }
            }
        }
    }
    // console.log(dist)
    return dist[n-1][n-1];
}






let answer = 0;
let cnt = 0;
for(let i = 0; i < input.length; i++){
    if(input[i] === "0") break;
    let len = input[i].split(" ").length;
    const n = parseInt(input[i])
    if(len === 1){
        const arr = new Array();
        for(let j = i+1; j < i+n+1; j++){
            arr.push(input[j].split(" ").map(item => +item))
        }
        // console.log(arr);
        cnt++;
        answer = solve(n, arr);
        console.log(`Problem ${cnt}: ${answer}`);



        i += n;
    }
}
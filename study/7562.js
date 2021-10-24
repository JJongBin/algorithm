const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/7562.txt';

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input.shift());

// console.log(input);

const solve = (l, night, target) => {

    let answer = 10e9;
    const dx = [-1, 1, 2, 2, 1, -1, -2, -2];
    const dy = [-2, -2, -1, 1, 2, 2, 1, -1];
    // const check = new Array(l);
    // for(let i = 0; i < l; i++){
    //     check[i] = new Array(l).fill(0);
    // }
    // console.log(check)
    let x = night[0];
    let y = night[1];

    let flag = false;
    const dfs = (L, x, y) => {
        // if(flag) return;
        if(L > l*l) return;
        if(x === target[0] && y === target[1]){
            answer = Math.min(L, answer);
            // flag = true;
            return;
        }
        else{
            for(let k = 0; k < dx.length; k++){
                const xx = x + dx[k];
                const yy = y + dy[k];
                if(xx >= 0 && xx < l && yy >= 0 && yy < l){
                // if(xx >= 0 && xx < l && yy >= 0 && yy < l && check[xx][yy] === 0){
                    // check[xx][yy] = 1;
                    dfs(L+1, xx, yy);
                    // check[xx][yy] = 0;
                }
            }
        }
    }
    // check[x][y] = 1
    // console.log(target)
    dfs(0, x, y);
    return answer;
}


let i = 0;
while(true){
    if(i+2 > input.length-1){
        break;
    }
    const l = parseInt(input[i]);
    const night = input[i+1].split(" ").map(item => +item);
    const target = input[i+2].split(" ").map(item => +item);
    console.log(solve(l, night, target));
    i += 3;
}




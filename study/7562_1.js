const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/7562.txt';

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input.shift());

// console.log(input);

const solve = (l, night, target) => {

    let answer = 10e9;
    const dx = [-1, 1, 2, 2, 1, -1, -2, -2];
    const dy = [-2, -2, -1, 1, 2, 2, 1, -1];

    const check = new Array(l);
    for(let i = 0; i < l; i++){
        check[i] = new Array(l).fill(0);
    }

    const queue = [];
    
    const bfs = () => {
        let L = 0;
        queue.push(night);
        check[night[0]][night[1]] = 1;

        while(queue.length > 0){
            let len = queue.length;
            for(let i = 0; i < len; i++){
                const [x, y] = queue.shift();
                check[x][y] = 1;
                if(target[0] === x && target[1] === y) return L;
                for(let k = 0; k < 8; k++){
                    const xx = x + dx[k];
                    const yy = y + dy[k];
                    if(xx >= 0 && xx < l && yy >= 0 && yy < l && check[xx][yy] === 0){
                        check[xx][yy] = 1;
                        queue.push([xx, yy]);
                    }
                }
            }
            L++;
        }
    }
    answer = bfs();
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




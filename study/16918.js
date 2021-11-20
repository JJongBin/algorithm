const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/16918.txt';

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const r = parseInt(input[0].split(" ")[0]);
const c = parseInt(input[0].split(" ")[1]);
const n = parseInt(input.shift().split(" ")[2]);

input = input.map(item => item.split(""));

let answer = new Array(r);
for(let i = 0; i < r; i++){
    answer[i] = new Array(c).fill("O");
}

const solve = () => {
    // 1초후는 그대로
    if(n === 1){
        return input;
    }
    // 모든 위치 폭탄
    else if(n % 2 === 0){
        return answer;
    }
    // 처음 폭탄 위치에서 폭팔
    else if(n % 3 === 0){
        const dx = [-1, 0, 1, 0];
        const dy = [0, 1, 0, -1];
        for(let i = 0; i < r; i++){
            for(let j = 0; j < c; j++){
                if(input[i][j] === "O"){
                    answer[i][j] = '.';
                    for(let k = 0; k < 4; k++){
                        const xx = i + dx[k];
                        const yy = j + dy[k];
                        if(xx >= 0 && xx < r && yy >= 0 && yy < c){
                            answer[xx][yy] = '.';
                        }
                    }
                }
            }
        }
    // 그대로
    // }else if(n > 1 && n % 4 === 1){
    }else if(n % 3 === 2){
        for(let i = 0; i < r; i++){
            for(let j = 0; j < c; j++){
                if(input[i][j] === "."){
                    answer[i][j] = ".";
                }
            }
        }
    }
    return answer;
}
console.log(solve().map(item => item.join("")).join("\n"));

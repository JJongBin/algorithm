const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './2615.txt';

let board = fs.readFileSync(filePath).toString().trim().split("\n").map(item => item.split(" ").map(item2 => +item2));

const len = board.length;
const dx = [1, 0, 1, 1];
const dy = [-1, 1, 1, 0];
let r_x = 0;
let r_y = 0;

// console.log(board)

outer: for (let i = 0; i < len; i++){
    for(let j = 0; j < len; j++){
        if(board[i][j] !== 0){
            r_x = i+1;
            r_y = j+1;
            for(let k = 0; k < 4; k++){
                temp = board[i][j];
                cnt = 1;
                x = i;
                y = j;
                if(x+dx[k] > 0 && x+dx[k] < len-1 && y+dy[k] > 0 && y+dy[k] < len-1){
                    if(board[x+dx[k]][x+dy[k]] !== temp){
                        while(x+dx[k] > 0 && x+dx[k] < len-1 && y+dy[k] > 0 && y+dy[k] < len-1){
                            cnt++;
                            x += dx[k];
                            y += dy[k];
                            if(cnt === 5 && board[x+dx[k]][y+dy[k]] !== temp){
                                console.log(temp);
                                console.log(r_x, r_y);
                                break outer;
                            }
                        }
                    }
                }
            }
        }
    }
}
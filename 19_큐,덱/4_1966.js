const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './4_1966.txt';

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const testCase = parseInt(input[0]);
input.shift();

let arr = [];
let n = 0;
let m = 0;
let temp = 0;
let cnt = 0;
let push_check = false;
for (let i = 0; i < testCase*2; i += 2){
    n = parseInt(input[i].split(" ")[0]);
    if (n === 1){
        console.log(1)
        continue
    }
    m = parseInt(input[i].split(" ")[1]);
    arr = input[i+1].split(" ").map(item => +item);
    
    cnt = 0
    while(true) {
        temp = arr.shift();
        m--;
        push_check = false
        for (let k = 0; k < arr.length; k++){
            if (temp < arr[k]){
                arr.push(temp);
                push_check = true;
                if (m < 0){
                    m = arr.length-1
                }
                break;
            }
        }
        if(push_check === false){
            cnt++;
        }
        if(m < 0){
            console.log(cnt);
            break
        }
    }
}









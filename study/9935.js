const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/9935.txt';

let input = fs.readFileSync(filePath).toString().trim().split("\n");

// console.log(input);
const target = input[1];
let str = input[0]
const stack = [];
let idx = 0;
while(idx !== str.length){
    let temp = str[idx];
    stack.push(temp)
    if(target[target.length-1] === temp){
        let tempCnt = 0;
        // console.log(stack);
        for(let i = target.length-1; i >= 0; i--){
            // console.log(target[i], stack[stack.length-1-tempCnt])
            if(target[i] === stack[stack.length-1-tempCnt]){
                tempCnt++;
            }else break;
        }
        if(tempCnt === target.length){
            for(i = 0; i < tempCnt; i++){
                stack.pop();
            }
        }
    }
    idx++;
}
const answer = stack.length > 0 ? stack.join("") : "FRULA";
console.log(answer);




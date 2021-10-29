const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../testcase/1700.txt';

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0].split(" ")[0]);
const m = parseInt(input.shift().split(" ")[1]);
input = input[0].split(" ").map(item => +item);

const check = new Array(m+1).fill(0);

const hash = new Map();
for(let i = 0; i < input.length; i++){
    hash.set(input[i], (hash.get(input[i]) || 0) + 1);
}
let answer = 0;
let cnt = 0;
for (let i = 0; i < input.length; i++){
    
    if(check[input[i]] === 0 && cnt < n){
        check[input[i]] = 1;
        cnt++;
    }else if(check[input[i]] === 0 && cnt === n){
        let code = 0;;
        let temp = cnt;
        const tempArr = new Array(101).fill(0);
        for(let j = i+1; j < input.length; j++){
            if(check[input[j]] === 1 && tempArr[input[j]] === 0){
                tempArr[input[j]] = 1
                if(hash.get(input[j]) === 0){
                    code = input[j];
                    break;
                }
                temp--;
                if(temp <= 0){
                    code = input[j];
                    break;
                }
            }
        }
        check[code] = 0;
        check[input[i]] = 1;
        answer++;
    }
    hash.set(input[i], hash.get(input[i]) - 1);
}
console.log(answer)

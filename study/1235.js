const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/1235.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = parseInt(input[0]);

const len = input[1].length;
let answer = 0;

outer: for(let i = len-1; i >= 0; i--){
    const check = new Set();
    for(let j = 1; j < n+1; j++){
        check.add(input[j].substr(i));
    }
    if(check.size === n ){
        answer = len-i;
        break outer;
    }
}
console.log(answer);
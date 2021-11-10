const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/9012.txt';

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);



const solve = (str) => {
    const stack = [];
    for(const s of str){
        if(s === ")"){
            const temp = stack.pop();
            if(temp !== "("){
                return "NO";
            }
            continue;
        }
        stack.push(s);
    }
    if(stack.length > 0) return "NO";
    return "YES";
}

const answer = [];
for (let i = 1; i < n+1; i++){
    answer.push(solve(input[i]));
}
console.log(answer.join("\n"));
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/10866.txt';

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);

const result = [];
const stack = [];
for(let i = 1; i < input.length; i++){
    let cmd = input[i].split(" ");
    if (cmd[0] ===  "push_front") { stack.unshift(cmd[1]) }
    else if (cmd[0] ===  "push_back") { stack.push(cmd[1]) }
    else if (cmd[0] ===  "pop_front") { 
        if(stack.length > 0) result.push(stack.shift()); 
        else result.push(-1);
    }
    else if (cmd[0] ===  "pop_back") { 
        if(stack.length > 0) result.push(stack.pop()); 
        else result.push(-1);
    }
    else if (cmd[0] ===  "size") { result.push(stack.length); }
    else if (cmd[0] ===  "empty") { result.push(stack.length === 0 ? 1 : 0); }
    else if (cmd[0] ===  "front") { 
        if(stack.length > 0) result.push(stack[0]); 
        else result.push(-1);
    }
    else if (cmd[0] ===  "back") { 
        if(stack.length > 0) result.push(stack[stack.length-1]); 
        else result.push(-1);
    }
}

console.log(result.join("\n"));


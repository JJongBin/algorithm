const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/2812.txt';

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0].split(" ")[0]);
const k = parseInt(input.shift().split(" ")[1]);

const len = input[0].length;

const stack = [+input[0][0]];
const target = len - k;

for (let i = 1; i < len; i++){
    
    // (스텍 개수 + 남은개수) > 출력해야 하는 수
    while(stack.length + (len - i)  > target){
        // 만약 현재 숫자가 더 크면 앞에서 지워줌
        if(stack[stack.length - 1] < +input[0][i]){
            stack.pop();

        // 스텍의 수가 더 크면 break
        }else{
            break;
        }
    }
    // 스텍에 값을 넣어줌
    stack.push(+input[0][i]);
}
// 큰수만 남도록 하였으나 뒤에 작은수만 있어서 작은 수가 들어왔을 수 있고, 
// 같은 수들이 계속 들어왔을 경우를 생각해서 출력해야하는 길이까지 pop!
while(stack.length > target){
    stack.pop();
}
console.log(stack.join(""))
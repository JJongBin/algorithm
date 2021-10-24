const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants");
const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './tastcase/15649.txt';

let input = fs.readFileSync(filePath).toString().trim().split(" ").map(item => +item);

const solve = (n, m) => {
    const result = [];
    const temp = [];
    const dfs = (L) => {
        if(temp.length === m){
            result.push(temp.join(" "));
            return;
        }
        else{
            for (let i = 1; i < n+1; i++){
                temp.push(i);
                dfs(L+1 , i);
                temp.pop();
            }
        }
    }
    dfs(0);
    
    return result;
}
console.log(solve(...input).join("\n"));
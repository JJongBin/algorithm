const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants");
const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './tastcase/15649.txt';

let input = fs.readFileSync(filePath).toString().trim().split(" ").map(item => +item);

const solve = (n, m) => {
    let answer = 0;
    const check = new Array(n+1).fill(0);
    const temp = [];
    const dfs = (L) => {
        if(temp.length === m){
            console.log(temp.join(" "));
            return;
        }
        else{
            for (let i = 1; i < n+1; i++){
                if(check[i] === 0){
                    check[i] = 1;
                    temp.push(i);
                    dfs(L + 1);
                    check[i] = 0;
                    temp.pop();
                }
            }
        }
    }
    dfs(0);
    
    return;
}
solve(...input);
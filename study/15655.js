const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './tastcase/15654.txt';

let input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = parseInt(input[0].split(" ")[0]);
const m = parseInt(input.shift().split(" ")[1]);
const nums = input[0].split(" ").map(item => +item).sort((a, b) => a-b);
// console.log(nums)

const solve = (n, m, nums) => {
    const result = [];
    const temp = [];
    const check = new Array(n).fill(0);
    const dfs = (L, s) => {
        if(L === m){
            result.push(temp.join(" "));
            return;
        }
        else{
            for (let i = s; i < n; i++){
                if(check[i] === 0){
                    temp.push(nums[i]);
                    check[i] = 1;
                    dfs(L+1, i+1);
                    check[i] = 0;
                    temp.pop();
                }
            }
        }
    }
    dfs(0, 0);
    
    return result;
}
console.log(solve(n, m, nums).join("\n"));
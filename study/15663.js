const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './tastcase/15663.txt';

let input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = parseInt(input[0].split(" ")[0]);
const m = parseInt(input.shift().split(" ")[1]);
const nums = input[0].split(" ").map(item => +item).sort((a, b) => a-b);
// console.log(nums)

const solve = (n, m, nums) => {
    const result = [];
    const temp = [];
    const check = new Array(n).fill(0);
    // const check2 = new Array(10000).fill(0);
    const dfs = (L) => {
        if(L === m){
            result.push(temp.join(" "));
            return;
        }
        else{
            for (let i = 0; i < n; i++){
                if(check[i] === 0){
                    check[i] = 1;
                    temp.push(nums[i]);
                    dfs(L+1);
                    temp.pop();
                    check[i] = 0;
                }
            }
        }
    }
    dfs(0);
    
    return result;
}
console.log([...new Set(solve(n, m, nums))].join("\n"));
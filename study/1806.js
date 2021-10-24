const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/1806.txt';

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0].split(" ")[0]);
const s = parseInt(input[0].split(" ")[1]);

const nums = input[1].split(" ").map(item => +item);

const solve = (n, s, nums) => {
    let answer = 100001;
    let left = 0;
    let temp = 0;
    // console.log(n, s, nums)

    for(let right = 0; right < n; right++){
        temp += nums[right];
        while(temp >= s){
            answer = Math.min(right - left +1, answer);
            temp -= nums[left];
            left++;
        }
    }
    if(answer === 100001) return 0;
    return answer;
}
console.log(solve(n, s, nums));


const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../testcase/1946.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const len = input.length;

for(let i = 0; i < len; i++){
    input[i] = input[i].split(" ").map(item => +item);
}
// console.log(input);


const solve = (arr) => {
    let answer = 0;

    arr.sort((a, b) => a[0] - b[0]);
    let compare = arr.length;
    for(let k = 0; k < arr.length; k++){
        if(arr[k][1] > compare){
            answer++;
        }
        compare = Math.min(compare, arr[k][1]);
        // console.log(compare)
    }
    console.log(arr.length - answer);
}




for(let i = 1 ; i < len; i++){
    if(input[i].length === 1){
        const arr = input.slice(i+1, i+input[i][0]+1);
        solve(arr);
        i += input[i][0];
    }
}
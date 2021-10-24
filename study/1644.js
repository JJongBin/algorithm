const fs = require('fs');
const { format } = require('path');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/1644.txt';

const num = parseInt(fs.readFileSync(filePath).toString().trim());

const solve = (num) => {
    let erasto = new Array(num+1).fill(true);
    for (let i = 2; i <= parseInt(Math.sqrt(num)); i++){
        if (erasto[i] === false){
            continue;
        }else {
            for (let j = 2; j < num; j++){
                if (i * j > num){
                    break;
                }else {
                    erasto[i*j] = false;
                }
            }
        }
    }
    // console.group(erasto);

    let answer = 0;
    let left = 2; 
    let sum = 0;
    for(let right = 2; right < num+1; right++){
        if(erasto[right] === true){
            sum += right;
        }
        while(sum > num){
            if(erasto[left] === true){
                sum -= left;
            }
            left++;
        }
        if(sum === num && erasto[right] === true) answer++;

    }
    return answer;


}
console.log(solve(num));




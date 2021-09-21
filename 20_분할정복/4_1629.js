const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './4_1629.txt';

let input = fs.readFileSync(filePath).toString().trim().split(" ");

const a = BigInt(input[0]);
const b = BigInt(input[1]);
const c = BigInt(input[2]);

// console.log(a, b, c);

const solve = (a, b, c) => {
    if (b === BigInt(1)){
        return a % c;
    } else {
        temp = solve(a, b/BigInt(2), c);
        // console.log(a, b, c, temp)
        if (b % BigInt(2) === BigInt(1)){ 
            // console.log(temp ** 2 * a % c)
            return (temp ** BigInt(2) * a) % c;
        } else {
            // console.log(temp ** 2 % c)
            return temp ** BigInt(2) % c;
        }
    }
}

let result = solve(a, b, c);

console.log(parseInt(result));
// if (result >= c){
//     console.log(result % c);
// } else {
// }


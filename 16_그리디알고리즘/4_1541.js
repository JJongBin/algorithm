// const fs = require("fs");
// const filePath = process.platform === 'linux'? "/dev/stdin" : "./4_1541.txt";

// let input = fs.readFileSync(filePath).toString().trim().split("\n")[0];

// let temp = ""
// let check = true;
// for (let i = 0; i < input.length; i++) {
    
//     if (i !== 0){
//         if ((input[i-1] === "-" || input[i-1] === "+" || input[i-1]==="0") && input[i] === "0") {
//             if (input[i+1] !== "+" && input[i+1] !== "-" && i !== input.length-1) {
//                 continue;
//             }
//         }

//     }
//     else if(i === 0) {
//         if(input[i] === "0") {
//             continue;
//         }   
//     }

//     if (input[i] === "-" && check === false) {
//         temp += ")";
//         check = true;
//     }
//     temp += input[i];
//     if (input[i] === "-" && check === true) {
//         temp += "(";
//         check = false;
//     }
// }
// if (check === false) {
//     temp += ")";
// }
// console.log(eval(temp));
// console.log(temp);



const fs = require("fs");
const filePath = process.platform === 'linux'? "/dev/stdin" : "./4_1541.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n")[0];

input = input.split("-");
let i;
let j;
let tempPlus = 0;
let tempMinus;

for (i = 0; i <input.length; i++) {
    input[i] = input[i].split("+").map((item) => parseInt(item));
}

for (i = 0; i <input.length; i++) {
    tempPlus = 0;
    for (j = 0; j < input[i].length; j++) {
        tempPlus += input[i][j];
        
    }
    if (i === 0) {
        tempMinus = tempPlus
    } else {
        tempMinus -= tempPlus
    }
}


console.log(tempMinus)
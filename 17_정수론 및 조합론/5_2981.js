// const fs = require("fs");
// const filePath = process.platform === 'linux' ? "/dev/stdin" : "./5_2981.txt";

// let input = fs.readFileSync(filePath).toString().trim().split("\n");

// const n = parseInt(input[0]);
// input.shift();

// input = input.map(item => +item);
// const minNum = Math.min.apply(null, input)


// let i;
// let j;
// let temp; 
// let result = [];
// let check;
// for (i = 2; i < minNum+1; i++) {
//     temp = [];
//     check = true;
//     for (j = 0; j < n; j++) {
//         temp.push(input[j] % i);
//     }    
//     for (j = 0; j < temp.length; j++) {
//         if (temp[0] !== temp[j]) {
//             check = false;
//             break;
//         }
//     }
    
//     if (check === true) {
//         result.push(i);
//     }
// }
// console.log(result.join(" "));







// const fs = require("fs");
// const filePath = process.platform === 'linux' ? "/dev/stdin" : "./5_2981.txt";

// let input = fs.readFileSync(filePath).toString().trim().split("\n");

// const n = input[0];
// input.shift();

// input = input.map(item => +item)

// let temp = [];
// let tempArr = [];
// let tempNum = 0;
// for (let i = 0; i < n-1; i++){
//     tempNum = Math.abs(input[i]-input[i+1]);

//     tempArr = [];
//     for (let j = 1; j <= tempNum; j++) {
//         if (tempNum % j === 0) {
//             tempArr.push(j);
//         }
//     }
//     temp.push(tempArr);
// }


// let idx = [10000, 0];
// for (const a of temp) {
//     a.shift();
//     if (idx[0] > a.length){
//         idx[0] = a.length;
//         idx[1] = a;
//     }
// }

// for (const a of temp) {
//     for (let i = 0; i < idx[1].length; i++) {
//         if (a.indexOf(idx[1][i]) === -1) {
//             idx[1].splice(idx[1].indexOf(idx[1][i]), 1)
//         }
//     }
// }
// console.log(...idx[1]);






const fs = require("fs");
const filePath = process.platform === 'linux' ? "/dev/stdin" : "./5_2981.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = input[0];
input.shift();

input = input.map(item => +item);
let temp = [];
for (let i = 0; i < n-1; i++){
    temp.push(Math.abs(input[i]-input[i+1]));
}
// console.log(temp)

let l = 0;
let target = temp[0];
let tempTarget = 0;

for (let i = 0; i < temp.length-1; i++){
    l = target> temp[i+1] ? temp[i+1] : target;
    for (let j = l; j > 1; j--){
        if(target % j === 0 && temp[i+1] % j === 0) {
            tempTarget = j;
            break;
        } 
    }
    target = tempTarget;
    ;
}
let result = [];
for (let i = 2; i < target+1; i++){
    if(target % i === 0) {
        result.push(i);
    }
}
console.log(...result);


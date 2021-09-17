// const fs = require("fs");
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './2_10816.txt';

// let input = fs.readFileSync(filePath).toString().trim().split("\n");

// const n = parseInt(input[0]);
// let arr = input[1].split(" ").map(item => +item).sort((a, b) => a-b);
// const m = parseInt(input[2]);
// let target = input[3].split(" ").map(item => +item);

// let result = [];
// for (let i = 0; i < m; i++){
//     left = 0;
//     right = arr.length-1;
//     while (true) {
//         mid = parseInt((left+right)/2);
//         if (arr[mid] === target[i]){
//             temp1 = mid-1;
//             temp2 = mid+1;
//             num = 1;
//             if(temp1 >= 0){
//                 while(arr[temp1] === target[i]){
//                     num++;
//                     temp1--;
//                     if(temp1 < 0){
//                         break;
//                     }
//                 }
//             }
//             if(temp2 <= arr.length-1){
//                 while(arr[temp2] === target[i]){
//                     num++;
//                     temp2++;
//                     if(temp1 > arr.length){
//                         break;
//                     }
//                 }
//                 result.push(num);
//                 break;
//             }

//         } else if (arr[mid] > target[i]){
//             right = mid-1;
//         } else if (arr[mid] < target[i]){
//             left = mid+1;
//         }
//         if (left > right) {
//             result.push(0)
//             break;
//         }
//     }
// }
// console.log(result.join(" "));





const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './2_10816.txt';

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const obj = {};
const n = parseInt(input[0]);
let arr = input[1].split(" ");
const m = parseInt(input[2]);
let target = input[3].split(" ");

for (const idx of arr){
    if(obj[idx] >= 1){
        obj[idx]++;
    }else{
        obj[idx] = 1;
    }
}
let result = [];
for (const idx of target){
    if(obj[idx] >= 1){
        result.push(obj[idx]);
    }else {
        result.push(0);
    }
}
console.log(result.join(" "));



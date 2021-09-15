const fs = require("fs");
const filePath = process.platform === 'linux' ? "/dev/stdin" : "./7_5430.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);
for (let i = 1; i < input.length-1; i += 3){
    cmd = input[i];
    t = parseInt(input[i+1]);
    arr = input[i+2].replace(/\[?\]?/gi , "").split(/,/).map(item => item === "" ? null : +item);
    
    check = false;
    reverse = false;
    for (let j = 0; j < cmd.length; j++){
        if(cmd[j] === "R"){
            // arr = arr.reverse();
            reverse = reverse === false ? true : false;
        } else if (cmd[j] === "D"){
            if(arr.length === 0 || arr[0] === null){
                console.log("error");
                check = true;
                break;
            }
            if(reverse === false){
                arr.shift();
            } else {
                arr.pop();
            }
        }
    }
    if (check === false){
        if(reverse === true){
            arr = arr.reverse();
        }
        console.log(`[${arr.join(",")}]`);
    }
}





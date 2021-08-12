const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './5_10250.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const t = parseInt(input[0]);
input.shift();
// result = []
for (let i = 0; i<input.length; i++){
    h = parseInt(input[i].split(" ")[0]);
    w = parseInt(input[i].split(" ")[1]);
    n = parseInt(input[i].split(" ")[2]);
    
    let floor = (n % h);
    let room = Math.floor(n / h) + 1;

    if (floor === 0){
        floor = h;
        room -= 1;
    } 


    if (room>=10){
        console.log(`${floor}${room}`);
        // result.push(`${floor}${room}`);
    } else {
        console.log(`${floor}0${room}`);
        // result.push(`${floor}0${room}`);
    }
}
// for (i = 0; i<result.length; i++){
//     console.log(result[i])
// }

// trim()을 붙이니 해결되었다...
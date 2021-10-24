const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase/2941.txt';
let str = fs.readFileSync(filePath).toString().trim();


const solve = (str) => {
    const target = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
    for(const t of target){
        let temp = new RegExp(t, "gi")
        str = str.replace(temp, "1");
    }
    
    return str.length;
}

console.log(solve(str));


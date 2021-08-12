const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './2_10870.txt';
const input = parseInt(fs.readFileSync(filePath).toString())


const pibo = function(n) {
    if (n >= 2) {
        return pibo(n-2) + pibo(n-1)
    } else {
        return n
    }
}
console.log(pibo(input))
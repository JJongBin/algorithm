const fs = require("fs");
const filePath = process.platform === 'linux' ? "/dev/stdin" : "./1_5086.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = input.map((item) => { return item.split(" ").map(num => {return +num})});

let i = 0;
while (input[i][0] && input[i][1]) {
    if (input[i][1] % input[i][0] === 0) {
        console.log("factor");
    } else if(input[i][0] % input[i][1] === 0) {
        console.log("multiple");
    } else {
        console.log("neither");
    }
    i++;
}

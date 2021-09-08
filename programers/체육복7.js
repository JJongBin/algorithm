function solution(n, lost, reserve) {
    var answer = 0;
    let std = new Array(n).fill(1);

    let i;
    for(i = 0; i < n ; i++){
        // setArr.push(1) 
        if(reserve.indexOf(i+1) !== -1){ 
             std[i]++;   
        } 
        if(lost.indexOf(i+1) !== -1){ 
            std[i]--; 
        }       
    }
    for(i = 0 ; i < n ; i++){
       if(!std[i]){ 
           if(std[i-1]===2){ 
                std[i]++; 
               std[i-1]--; 
           }else if(std[i+1] === 2){ 
               std[i]++; 
               std[i+1]--; 
           }
       }
    }
    for(i = 0 ; i< n ; i++){
        if(std[i] >= 1){
            answer++;
        }
    }
    return answer;
}

console.log(solution(10, [1, 2,3], [1,6,8, 10]));
console.log(solution(10, [1, 2,3,4, 8, 10], [1,2,3]));
console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [2, 4], [3]));
console.log(solution(5, [1,3,4] ,[2,3]));
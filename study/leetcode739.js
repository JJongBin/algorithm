var dailyTemperatures = function(temperatures) {
    const result = new Array(temperatures.length).fill(0);
    const stack = [];
    for(let i = 0; i < temperatures.length; i++){
        while(stack.length > 0 && temperatures[i] > temperatures[stack[stack.length-1]]){
            temp = stack.pop();
            result[temp] = i - temp;
        }
        stack.push(i);
    }
    return result;
};

// 739. Daily Temperatures

// Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

 

// Example 1:

// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]
// Example 2:

// Input: temperatures = [30,40,50,60]
// Output: [1,1,1,0]
// Example 3:

// Input: temperatures = [30,60,90]
// Output: [1,1,0]



let dailyTemperature =(temp)=>{
    let n = temp.length
    let ans = new Array(n).fill(0)
    let stack = new Array()
    for(let i=0;i<n;i++){
        while(stack.length && temp[i]>temp[stack[stack.length-1]]){
            let idx= stack.pop()
            ans[idx] = i-idx 

        }
        stack.push(i)
    }
    return ans

}
//dailyTemperature([72,73,71,69,68,75,76,90])


let nextGreaterElement =(temp)=>{
    let n = temp.length
    let ans = new Array(n).fill(0)
    let stack = new Array()
    for(let i=0;i<n;i++){
        while(stack.length && temp[i]>temp[stack[stack.length-1]]){
            let idx= stack.pop()
            ans[idx] = i-idx 

        }
        stack.push(i)
    }
    console.log(ans)


}
nextGreaterElement([73,74,75,71,69,72,76,73])



/**
 * bottom-up
 */
var dailyTemperatures4 = function(temperatures) {
    let n = temperatures.length;
    let stack = new Array();
    let res = new Array(n).fill(0);

    for (let i = n-1; i >= 0; i--) {
        while(stack.length && temperatures[i] >=  temperatures[stack[stack.length-1]]) {
            stack.pop();
        }
        res[i] = stack[stack.length-1] - i || 0;
        stack.push(i);
    }
    return res;
};


 
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures5 = function(temperatures) {
    const n = temperatures.length;
    const stack = []; // Use a stack to keep track of indices

    // Initialize the result array with zeros
    const result = new Array(n).fill(0);

    for (let i = n - 1; i >= 0; --i) {
        while (stack.length > 0 && temperatures[i] >= temperatures[stack[stack.length - 1]]) {
            // Pop elements from the stack while the current temperature is greater
            stack.pop();
        }

        if (stack.length > 0) {
            // If the stack is not empty, calculate the difference in indices
            result[i] = stack[stack.length - 1] - i;
        }

        // Push the current index onto the stack
        stack.push(i);
    }

    return result;
};

// Example usage:
const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
const result = dailyTemperatures(temperatures);
console.log(result);
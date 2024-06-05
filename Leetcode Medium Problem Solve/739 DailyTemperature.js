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
dailyTemperature([72,73,71,69,68,75,76,90])


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
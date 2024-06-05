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
    console.log(ans)

}
dailyTemperature([72,73,71,69,68,75,76,90])
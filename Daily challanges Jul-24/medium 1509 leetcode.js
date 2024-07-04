let minimumDifference = (nums) => {
    if(nums.length <=4){
        return 0
    }
    let arr = nums.sort((a, b) => a - b)
    let n = arr.length
    let result = []
    result.push(arr[n-4]-arr[0])
    result.push(arr[n-3]-arr[1])
    result.push(arr[n-2]-arr[2])
    result.push(arr[n-1]-arr[3])
    return Math.min(...result)

}

minimumDifference([3, 2, 4, 5, 1])
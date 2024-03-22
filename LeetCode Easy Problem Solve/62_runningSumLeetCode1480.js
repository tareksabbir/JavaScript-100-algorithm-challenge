// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.



// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
// Example 3:

// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]


var runningSum = function (nums) {
    let arr = []
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        arr.push(sum += nums[i])
    }

    return arr


};

//console.log(runningSum([3,1,2,10,1]))


var runningSum2 = function (nums) {
    let arr = []
    let sum = 0
    for (let n of nums) {
        arr.push(sum += n)
    }
    return arr


};

console.log(runningSum2([3, 1, 2, 10, 1]))



function run(arr) {
    let r = []
    sum = 0
    for (let n of arr) {
        r.push(sum += n)
    }
    return arr = r
}

console.log(run([3, 1, 2, 10, 1]))
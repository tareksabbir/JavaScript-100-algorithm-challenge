/*
268. Missing Number

Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

 

Example 1:

Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
Example 2:

Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
Example 3:

Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
 */

var missingNumber = function (nums) {
    let min = Math.min(...nums)
    let max = Math.max(...nums)
    for (let i = 0; i <= max - min + 1; i++) {
        if (nums.indexOf(i) === -1) {
            return i
        }
    }


};

//console.log(missingNumber([0, 1]))


// way 2

var missingNumber2 = (nums) => {
    return (nums.length * (nums.length + 1) / 2) - nums.reduce((a, b) => a + b, 0)

};
//console.log(missingNumber2([0, 1]))

// way 3

var missingNumber3 = function (nums) {
    nums.sort((a, b) => a - b)
    let len = nums.length
    for (let i = 0; i < len; i++) {
        if (nums[i] == i) {
            continue
        } else {
            return i
        }
    }
    return nums.length
};

//missingNumber3([0, 3, 2])


const missingNumbers = (nums) => {
    let n = nums.length
    let arraySum = n * (n + 1) / 2
    let exSum = nums.reduce((total, value) => total + value, 0)
    return arraySum - exSum


}
console.log(missingNumbers([0, 1, 2]))

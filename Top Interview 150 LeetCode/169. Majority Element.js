/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    nums.sort((a, b) => a - b)
    let maj = nums[0]
    let majCount = 1
    let i = 1
    while (i < nums.length) {
        let count = 1
        while (nums[i] === nums[i - 1]) {
            count += 1
            i += 1
        }
        if (count > majCount) {
            maj = nums[i - 1]
            majCount = count
        }
        if (count == 1) i += 1
    }
    console.log(maj)
    return maj
};
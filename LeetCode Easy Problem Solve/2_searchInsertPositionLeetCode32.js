/*
35. Search Insert Position

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
 */

var searchInsert = function (nums, target) {
    if (nums.includes(target)) {
        return nums.indexOf(target)
    } else {
        nums.push(target)
        nums.sort((a, b) => a - b)
        return nums.indexOf(target)
    }

};

//console.log(searchInsert([0, 1, 3, 5, 6], 8))

// way 2


var searchInsert2 = function (nums, target) {
    let left = 0;
    let right = nums.length;

    while (left < right) {
        const mid = Math.floor((right - left) / 2) + left;
        if (target > nums[mid]) left = mid + 1;
        else right = mid;
    }

    return left;
};

// console.log(searchInsert2([0, 1, 3, 5, 6], 7))

// way 3 easy way 

var searchInsert3 = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] === target) {
            return mid
        }
        if (nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return left


};
//console.log(searchInsert3([0, 1, 3, 5, 6], 7))


// brout force 
function src(arr, target) {
    if (arr.includes(target)) return arr.indexOf(target)
    let sorting = arr.sort((a, b) => a - b)
    for (let n of sorting) {
        if (n > target) {
            return sorting.indexOf(n) - 1
        }
    }
    return sorting.length

}

//console.log(src([0, 1, 3, 5, 6], 7))


function binary(array, target) {
    let arr = array.sort((a, b) => a - b)
    let l = 0
    let r = arr.length - 1
    while (l <= r) {
        let mid = Math.floor((l + r) / 2)
        if (arr[mid] == target) {
            return mid
        }
        if (arr[mid] < target) {
            l = mid + 1
        }
        else {
            r = mid - 1
        }

    }
    return l


}

console.log(binary([3, 6, 5, 4, 7], 5))
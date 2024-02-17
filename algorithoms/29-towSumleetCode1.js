/*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1] */

var twoSum = function (nums, target) {
    let newArray = []
    let l = nums.length
    for (let i = 0; i < l; i++) {
        for (let j = 0; j < l; j++) {
            if (nums[i] + nums[j] === target && i != j) {
                newArray.push(i)
            }
        }
    }
    return newArray


};

//twoSum([3, 2, 3], 6)

// using map

var twoSum2 = function (nums, target) {
    let map = new Map()
    let len = nums.length
    for (let i = 0; i < len; i++) {
        let compliment = target - nums[i]
        if (map.has(compliment)) {
            return [i, map.get(compliment)]
        }
        map.set(nums[i], i)
    }
};

//console.log(twoSum2([], 6))


// way 3 as map 

// cc: [] ?
// cc: [1,1]
// cc: [2,7,2,7]

const towSum3 = (arr, target) => {
    let comp = new Map()
    let len = arr.length
    for (let i = 0; i < len; i++) {
        if(comp[arr[i]]>=0){
            return [comp[arr[i]],i]
        }
        comp[target-arr[i]]=i
        
    }
    return []
    
}

 console.log(towSum3([1,1], 9))


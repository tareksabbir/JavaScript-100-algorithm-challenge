/*
We are given a list nums of integers representing a list compressed with run-length encoding.

Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).  For each such pair, there are freq elements with value val concatenated in a sublist. Concatenate all the sublists from left to right to generate the decompressed list.

Return the decompressed list.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [2,4,4,4]
Explanation: The first pair [1,2] means we have freq = 1 and val = 2 so we generate the array [2].
The second pair [3,4] means we have freq = 3 and val = 4 so we generate [4,4,4].
At the end the concatenation [2] + [4,4,4] is [2,4,4,4].
Example 2:

Input: nums = [1,1,2,3]
Output: [1,3,3]
*/


var decompressRLElist = function (nums) {
    let store = []
    for (let i = 0; i < nums.length; i += 2) {
        for (let j = 0; j < nums[i]; j++) {
            store.push(nums[i + 1])

        }
    }
    return store


};

console.log(decompressRLElist([1, 2, 3, 4]))


var decompressRLElist2 = function (nums) {
    let store = []
    for (let i = 0; i < nums.length; i += 2) {
        let n = nums[i]
        while (n--) {
            store.push(nums[i + 1])
        }
    }
    return store
};

//console.log(decompressRLElist2([1, 2, 3, 4]))


// way 3 
// what if the numbers of an array has not even properties

var decompressRLElist3 = function (nums) {
    let store = []
    if (nums.length % 2 !== 0) {
        nums.splice(nums.length - 1, 0, 1)
    }
    for (let i = 0; i < nums.length; i += 2) {
        let [freq, val] = [nums[i], nums[i + 1]]
        for (let j = 0; j < freq; j++) {
            store.push(val)
        }
    }
    return store

};

//console.log(decompressRLElist3([1, 3, 5, 6, 5]))

// practice 
const decompress = (num) => {
    let store = []
    for (let i = 0; i < num.length; i += 2) {
        let [count, val] = [num[i],num[i + 1]]
        for (let j = 0; j < count; j++) {
            store.push(val)
        }
    }
    return store

}
console.log(decompress([1, 3, 5, 6, 5, 3, 5, 2]))
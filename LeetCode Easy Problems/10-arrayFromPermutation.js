//1920 build array from permutation 
// input num = [0,2,1,5,3,4]
// output = [0,1,2,3,4,5]

function arrayFromPermutation(nums) {
    let newArray = []
    let length = nums.length
    for (let i = 0; i < length; i++) {
        let index = nums[nums[i]]
        newArray.push(index)
    }
    return newArray

}
arrayFromPermutation([5, 0, 1, 2, 3, 4])
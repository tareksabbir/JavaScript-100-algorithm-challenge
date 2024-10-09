/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {

    nums.sort((a,b)=>b-a)
  
    while(nums.length){
        let max = nums.shift()
        const sum = nums.reduce((sum, curr) => sum + curr, 0);
        if(sum>max){
            return sum+max
        }
    }
    return -1
};
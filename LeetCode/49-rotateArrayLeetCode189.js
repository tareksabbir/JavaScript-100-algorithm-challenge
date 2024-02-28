var rotate = function(nums, k) {
    let len = nums.length
    k = k%len
    let arr = nums.splice(len-k,k)
    nums.unshift(...arr)
    
 };

 rotate([1,2,3,4,5,6,7],108)
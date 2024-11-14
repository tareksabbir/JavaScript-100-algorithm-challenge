//5. Jump Game II

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let l = 0, r = 0, n = nums.length;
    let jumps = 0;
    while(r<n-1){
        let far = 0;
        for(let i = l;i<=r;i++){
            far = Math.max(far, i+nums[i]);
        }
        l = r+1;
        r = far;
        jumps++;
    }
    return jumps;
};
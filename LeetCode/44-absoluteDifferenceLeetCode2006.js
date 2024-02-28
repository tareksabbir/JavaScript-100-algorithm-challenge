// leet Code 2006
function absoluteValue(nums, k) {
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] - nums[i] == k) {
                ++count
            }
        }
    }
    return count

}
absoluteValue([1, 2, 2, 1], 1)

//way 2
var countKDifference = function(nums, k) {
    let map = {};
    for(let i of nums) {
        map[i] ? map[i]++ : map[i] = 1 
    }
    
    let pairs = 0;
    
    for(let i = 0; i<nums.length; i++) {
        if(map[nums[i]-k]) {
            pairs += map[nums[i] - k]
        }
    }
    
    return pairs;
    
};

countKDifference([1, 2, 2, 1],1)

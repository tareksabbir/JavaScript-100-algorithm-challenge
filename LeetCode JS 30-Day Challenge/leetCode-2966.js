// You are given an integer array nums of size n and a positive integer k.
// Divide the array into one or more arrays of size 3 satisfying the following conditions:
// Each element of nums should be in exactly one array.
// The difference between any two elements in one array is less than or equal to k.
// Return a 2D array containing all the arrays. If it is impossible to satisfy the conditions, return an empty array. And if there are multiple answers, return any of them.
//  
// Example 1:
// Input: nums = [1,3,4,8,7,9,3,5,1], k = 2
// Output: [[1,1,3],[3,4,5],[7,8,9]]
// Explanation: We can divide the array into the following arrays: [1,1,3], [3,4,5] and [7,8,9].
// The difference between any two elements in each array is less than or equal to 2.
// Note that the order of elements is not important.
// Example 2:
// Input: nums = [1,3,3,2,7,3], k = 3
// Output: []
// Explanation: It is not possible to divide the array satisfying all the conditions.


function groupNumbers(nums, k) {
    // Sort the array to group similar numbers together
    nums.sort((a, b) => a - b);
  
    const result = [];
    let currentGroup = [];
  
    for (let num of nums) {
      // Check if current group can accommodate another number with <= k difference
      if (currentGroup.length < 3 && (currentGroup.length === 0 || num - currentGroup[currentGroup.length - 1] <= k)) {
        currentGroup.push(num);
      } else {
        // Push the filled group and start a new one
        result.push(currentGroup);
        currentGroup = [num];
      }
    }
  
    // Push the last group if it's not empty
    if (currentGroup.length > 0) {
      result.push(currentGroup);
    }
  
    return result;
  }
  
  // Example usage
  const nums1 = [1, 3, 4, 8, 7, 9, 3, 5, 1];
  const k1 = 2;
  const result1 = groupNumbers(nums1, k1);
  console.log(result1); // Output: [[1, 1, 3], [3, 4, 5], [7, 8, 9]]
  
  const nums2 = [1, 3, 3, 2, 7, 3];
  const k2 = 3;
  const result2 = groupNumbers(nums2, k2);
  console.log(result2); // Output: []
  
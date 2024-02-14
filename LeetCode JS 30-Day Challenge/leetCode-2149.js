//2149. Rearrange Array Elements by Sign

// You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers.

// You should rearrange the elements of nums such that the modified array follows the given conditions:

// Every consecutive pair of integers have opposite signs.
// For all integers with the same sign, the order in which they were present in nums is preserved.
// The rearranged array begins with a positive integer.
// Return the modified array after rearranging the elements to satisfy the aforementioned conditions.

 

// Example 1:

// Input: nums = [3,1,-2,-5,2,-4]
// Output: [3,-2,1,-5,2,-4]
// Explanation:
// The positive integers in nums are [3,1,2]. The negative integers are [-2,-5,-4].
// The only possible way to rearrange them such that they satisfy all conditions is [3,-2,1,-5,2,-4].
// Other ways such as [1,-2,2,-5,3,-4], [3,1,2,-2,-5,-4], [-2,3,-5,1,-4,2] are incorrect because they do not satisfy one or more conditions.  



function rearrangeArray(nums) {
    
    if (nums.length % 2 !== 0) {
      throw new Error("Array length must be even");
    }
  
    
    const positives = [];
    const negatives = [];
    for (const num of nums) {
      if (num > 0) {
        positives.push(num);
      } else {
        negatives.push(num);
      }
    }
  
   
    if (positives.length !== negatives.length) {
      throw new Error("Array must have equal number of positive and negative integers");
    }
  
    
    const result = [];
    for (let i = 0; i < positives.length; i++) {
      result.push(positives[i], negatives[i]);
    }
  
    return result;
  }
  
  // Example usage
  const nums1 = [3, 1, -2, -5, 2, -4];
  const result1 = rearrangeArray(nums1);
  console.log(result1); // Output: [3, -2, 1, -5, 2, -4]
  
  const nums2 = [-1, 1];
  const result2 = rearrangeArray(nums2);
  console.log(result2); // Output: [1, -1]
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    
    let common = -1; // Initialize common variable to track the common value
    let i = 0, j = 0;

    // Loop until one of the arrays ends
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) { // If a common value is found
            common = nums1[i]; // Update the common variable
            break; // Break out of the loop since we found the minimum common value
        } else if (nums1[i] < nums2[j]) { // If current value in nums1 is smaller
            i++; 
        } else {
            j++; // Move to the next element in nums2
        }
    }

    return common; 
};
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;
    while(i >= 0 && j >= 0) {
        if(nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }
    }
    while(j >= 0) {
        nums1[k--] = nums2[j--];
    }
};

///This is a JavaScript function named merge that merges two sorted arrays nums1 and nums2 into a single sorted array nums1. The function modifies nums1 in-place, meaning it does not return a new array but instead changes the original nums1 array.

// Here's a step-by-step breakdown of how the function works:

// The function takes four parameters:
// nums1: the first sorted array
// m: the number of elements in nums1 that are valid (i.e., not padding)
// nums2: the second sorted array
// n: the number of elements in nums2
// The function initializes three indices:
// i: points to the last valid element in nums1 (initially m - 1)
// j: points to the last element in nums2 (initially n - 1)
// k: points to the last position in the merged array (initially m + n - 1)
// The function enters a loop that continues until either i or j becomes negative. In each iteration:
// If nums1[i] is greater than nums2[j], the function copies nums1[i] to nums1[k] and decrements i and k.
// Otherwise, the function copies nums2[j] to nums1[k] and decrements j and k.
// After the loop, if there are remaining elements in nums2 (i.e., j >= 0), the function copies them to the remaining positions in nums1 using a second loop.
// The time complexity of this function is O(m + n), where m and n are the lengths of the input arrays. The space complexity is O(1) since the function only uses a few extra variables and does not allocate any additional memory.

// The function assumes that nums1 has enough capacity to hold the merged result, i.e., nums1.length >= m + n. If this is not the case, the function will throw an error or produce incorrect results.


// Share
// New

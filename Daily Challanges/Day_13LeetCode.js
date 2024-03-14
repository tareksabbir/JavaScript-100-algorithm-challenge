var numSubarraysWithSum = function(nums, goal) {
    // Using a Map to store the count of cumulative sums encountered
    const count = new Map();
    // Initialize the count of 0 cumulative sum to 1 because an empty subarray also counts
    count.set(0, 1);
    let currSum = 0; // Initialize the current sum
    let totalSubarrays = 0; // Initialize the count of subarrays with sum equal to the goal

    for (let num of nums) { // Loop through the array
        currSum += num; // Update the current sum
        // Check if there exists a previous cumulative sum such that (currSum - goal) = that sum
        // If it exists, it means there is a subarray ending at the current index whose sum equals the goal
        if (count.has(currSum - goal)) {
            totalSubarrays += count.get(currSum - goal); // Add the count of such subarrays to the total count
        }
        count.set(currSum, (count.get(currSum) || 0) + 1); // Update the count of the current cumulative sum
    }

    return totalSubarrays; // Return the count of subarrays with sum equal to the goal
};
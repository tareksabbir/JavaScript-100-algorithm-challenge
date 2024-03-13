// Function to find the pivot integer
const pivotInteger = (n) => {
    // Calculate the potential pivot using arithmetic series formula
    const potentialPivot = Math.sqrt(n * (n + 1) / 2);
    
    // Check if the potential pivot is an integer
    if (Number.isInteger(potentialPivot)) {
        return Math.floor(potentialPivot); // If yes, return the floor value
    } else {
        return -1; // Otherwise, return -1 indicating no valid pivot
    }
};

// Example usage:
const n = 5;
console.log(`The pivot integer for ${n} is: ${pivotInteger(n)}`);
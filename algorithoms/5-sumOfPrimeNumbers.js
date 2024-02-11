// Sum all the prime numbers up to and including the provided number.
// A prime number is defined as a number greater than one and having only two divisors, one and itself.
// For example, 2 is a prime number because it's only divisible by one and two.
// The provided number may not be a prime
// Example
// sumAllPrime (10) should return 17
// sumAllPrime (977) should return 73156


function sumOfAllPrime(numbers) {
    let totalSum = 0
    for (let i = 2; i < numbers; i++) {
        for (let j = 2; j < numbers; j++) {
            if (i === j) {
                totalSum += i
            } else if (i % j === 0) {
                break
            }
        }
    }

    return totalSum


}
//console.log(sumOfAllPrime(900))




function isPrime(num) {
    if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
    
    // Check divisibility up to the square root of the number
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // If it's divisible by any number, it's not prime
        }
    }
    
    return true; // If no divisors are found, it's prime
}

function sumOfAllPrime(numbers) {
    let totalSum = 0;
    for (let i = 2; i < numbers; i++) {
        if (isPrime(i)) {
            totalSum += i; // Add prime numbers to total sum
        }
    }
    return totalSum;
}

//console.log(sumOfAllPrime(977)); 










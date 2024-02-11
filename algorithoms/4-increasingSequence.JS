// Give a sequence of integer to an array, determine whether it is possible to obtain a strictly increasing sequence by removing not more than one element from the array.

// For sequence = [1, 3, 2, 1], the output should be almost increasingSequence (sequence) = false;

// There is no one element in this array that can be removed in order to get a strictly increasing sequence

// For sequence = [1, 2, 3], the output should be almost increasing Sequence (sequence) = true;

// You can remove 3 from the array to get a strictly increasing sequence (1, 2). Alternately, you can remove 2 to get the strictly increasing sequence [1, 3]

// Return true if it is possible to remove one element from the array in order to get a strictly increasing sequence, otherwise return false.


function almostIncreasingSequence(sequence) {
    let violation = 0
    let arrayLength = sequence.length
    for (let i = 1; i < arrayLength; i++) {
        if (sequence[i] < sequence[i - 1]) {
            return false
        }
    }
    return true

}


//console.log(almostIncreasingSequence([1, 3, 2, 1]))


// way two

function almostIncreasingSequence2(sequence) {
    let violation = 0
    let arrayLength = sequence.length
    for (let i = 1; i < arrayLength; i++) {

        if (sequence[i] <= sequence[i - 1]) {
            violation++
            if (violation > 1) {
                return false
            }
            if (i > 1 && sequence[i] <= sequence[i - 2]) {
                return false
            }
            if (i < sequence.length - 1 && sequence[i + 1] <= sequence[i - 1]) {
                return false
            }

        }
    }
    return true

}


console.log(almostIncreasingSequence2([1, 1, 2, 3, 4, 5]))
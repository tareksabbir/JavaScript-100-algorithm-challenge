// Given an array of integers arr and an integer k. Find the least number of unique integers after removing exactly k elements.



// Example 1:

// Input: arr = [5,5,4], k = 1
// Output: 1
// Explanation: Remove the single 4, only 5 is left.
// Example 2:
// Input: arr = [4,3,1,1,3,3,2], k = 3
// Output: 2
// Explanation: Remove 4, 2 and either one of the two 1s or three 3s. 1 and 3 will be left.

// const number = [1, 1, 3, 2, 4, 5, 7, 7, 8, 4, 6, 3]

// const uniq = numbers.filter(function (value, index, array) {
//     return array.indexOf(value) === index
// })


// has mapping concept 
// its a data structure 

function hashMap(array) {
    let countMap = {};

    // Loop through the array and count the occurrences of each element
    array.forEach(element => {
        if (countMap[element] === undefined) {
            countMap[element] = 1;
        } else {
            countMap[element]++;
        }
    });
    //console.log(countMap)
}
hashMap([1, 2, 3, 2, 1, 3, 4, 4, 5])




var findLeastNumOfUniqueInts = function (arr, k) {
    let frequency = new Map()
    arr.forEach((num) => {
        frequency.set(num, (frequency.get(num) || 0) + 1)
    })
    let sorted = Array.from(frequency.entries()).sort((a, b) => a[1] - b[1])
    let uniqueCunt = sorted.length
    for (let [num, frequency] of sorted) {
        if (k >= frequency) {
            k -= frequency
            uniqueCunt--
        } else {
            break
        }
    }
    return uniqueCunt


};


let result = findLeastNumOfUniqueInts([4, 3, 1, 1, 3, 3, 2], 3)

//console.log(result)





function hashMapPractice(arr,k) {
    let mapObject = new Map()
    arr.forEach(num => {
        mapObject.set(num, mapObject.get(num) + 1 || 1)
    })

    let sorting = Array.from(mapObject.values()).sort((a, b) => a - b)
    let sortLength = sorting.length
    for (let num of sorting) {
        if (k >= num) {
            k -= num
            sortLength--
        } else {
            return sortLength
        }
    }
    return sortLength


}

let hash= hashMapPractice([4, 3, 1, 1, 3, 3, 2], 3)
console.log(hash)


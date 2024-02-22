let data = [1, 2, 3, 4, 5, 6, 7, 8]

function binarySearch(array, k) {
    let leftIndex = 0
    let rightIndex = array.length
    while (leftIndex <= rightIndex) {
        let midIndex = Math.floor((leftIndex + rightIndex) / 2)
        if (k === array[midIndex]) {
            return midIndex
        } else if (k < array[midIndex]) {
            rightIndex = midIndex - 1
        } else {
            leftIndex = midIndex + 1
        }
    }
    return -1

}

console.log(binarySearch(data, 8))
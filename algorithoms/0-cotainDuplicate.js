// way 1 check if the array contains a duplicate element or not 

const containDuplicate = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return true
            }
        }
    }
    return false

}
//console.log(containDuplicate([1, 2, 3, 4, 5, 1]))


let a = ['a', 'b', 'c', 'd', 'b', 'c', 'd', 'e', 'f', 'a', 'b', 'c', 'd', 'b', 'c', 'd', 'e', 'f']
let b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 3, 4, 5, 6, 6, 7, 8, 9, 3]


//way 2 unique array by filter method 

function useFilterMethod(data) {
    return data.filter((item, index) => data.indexOf(item) === index)// get duplicate  data.indexOf(item)!==index)
}
console.log(useFilterMethod(a))


// way3


// way 1 check if the array contains a duplicate element or not 

const containDuplicate = (arr) => {
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = i + 1; j < arr.length; j++) {
    //         if (arr[i] === arr[j]) {
    //             return true
    //         }
    //     }
    // }
    // return false
    let mapObject = new Map()
    arr.forEach(num => {
        mapObject.set(num, mapObject.get(num) + 1 || 1)
    })
    let a = Array.from(mapObject.values()).filter(value => value <= 2 )
    return a.length === num.length


}
console.log(containDuplicate([1, 2, 3, 4, 5, 1]))


let a = ['a', 'b', 'c', 'd', 'b', 'c', 'd', 'e', 'f', 'a', 'b', 'c', 'd', 'b', 'c', 'd', 'e', 'f']
let b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 3, 4, 5, 6, 6, 7, 8, 9, 3]


//way 2 unique array by filter method 

function useFilterMethod(data) {
    return data.filter((item, index) => data.indexOf(item) === index)// get duplicate  data.indexOf(item)!==index)
}
//console.log(useFilterMethod(a))


// way3 unique array by sets

function useSetMethod(data) {
    let a = [...new Set(data)]// set always contain unique value but dose not contain index value so er can convert into an array like this 
    let c = a.reduce((total, value) => total + value, 0)
    return a, c
}
//console.log(useSetMethod(b))





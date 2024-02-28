// clone an a array
// arr([1,1])->[1,1,[1,1]]

function clone(arr) {
    // let cloneArr = []
    // for (let value of arr) {
    //     cloneArr.push(value)
    // }
    // return [...cloneArr, [...arr]]
    return [...arr, [...arr]]
}

console.log(clone([1, 2, 4, 6]))
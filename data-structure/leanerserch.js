function leanerSearch(arr, val) {
    // for (let i = 0; i < arr.length; i++){
    //     if(val === arr[i]){
    //         return i
    //     }
    // }

    for (let value of arr) {
        if (value === val) {
            return arr.indexOf(value)
        }
    }
    return "not found"


}


//let result = leanerSearch(["a", "b", "c", "d", "d"], "f")
//console.log(result)



const longString = (arr) => {
    let longStr = []
    for (let value of arr) {
        longStr.push(value.length)
    }
   console.log(Math.max(...longStr))


}

longString(["tarek sabbir", "is a web developer", "he is a good boy ", "he lives in a chittagong "])



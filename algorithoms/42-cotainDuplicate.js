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



//way 2

let a = ['a', 'b', 'c', 'd', 'b', 'c', 'd', 'e', 'f', 'a', 'b', 'c', 'd', 'b', 'c', 'd', 'e', 'f']

function useFilterMethod(data){
    return data.filter((item,index)=> data.indexOf(item)===index)
}

console.log(useFilterMethod(a))
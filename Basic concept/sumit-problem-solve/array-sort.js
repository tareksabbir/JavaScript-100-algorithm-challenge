//Problem 2-----------------------------------------------------------------------
//// ki vabe alphabet onushare kono database or array k shajaite pari *** important ekhane kono function na likhleo cholbe direct kora jabe 

let Students = ['kaka', 'messi', 'lukas', 'gavi', 'polad', 'abbas', 'sala', 'boshir', 'cokes']
let newSort = Students.sort()
console.log(newSort);

//function

function arraySorting(names) {
    let sortArray = names.sort();
    return sortArray;
}
let arrays = arraySorting(Students)
console.log(arrays);


// number sort 
// main array o change hoi jabe 
// array.sort() sudhu string k sort kore amra jodi number k sort korte chai tahole aii vabe korte hobe 

let rollNumber = [7, 8, 9, 3, 6, 4, 11, 21, 32, 34, 78, 68, 58, 47, 36, 39]
let sortedtNumber = rollNumber.sort(function sortNumber(a, b) {
    return a - b;
})
console.log(sortedtNumber);


//---------------------------------------------------------------------

let price = [3000, 3400, 1100, 100, 200, 340, 780, 34, 400, 350, 460];
let lowToHighSortPrice = price.sort(function (a, b) {
    return a - b // choto theke boro 
})
console.log(lowToHighSortPrice);





let highToLowSortPrice = price.sort(function (a, b) {
    return b - a;
})
console.log(highToLowSortPrice);

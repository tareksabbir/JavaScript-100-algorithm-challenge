// array foreach way 1
const newArray = [4, 5, 6, 7, 8, 9, 1, 21, 23, 34]
function functionForEach(value, index, array) {
    // console.log('array value', value);
    // console.log('array index:', index);
    // console.log('array array', array);

}
newArray.forEach(functionForEach)


// array foreach way 2

newArray.forEach(function (value, index, array) {
    console.log('array value', value);
    console.log('array index:', index);
    console.log('array array', array);
})

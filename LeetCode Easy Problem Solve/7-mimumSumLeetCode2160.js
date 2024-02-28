//minimum Sum of four digit number after splitting digits
// input = 2932
// output =52

function minimumSum(num) {
    let arr = num.toString().split("").sort()
    console.log('sorted array:', arr)
    const sum = Number(arr[0] + arr[3]) + Number(arr[1] + arr[2])
    console.log("minimum sum :", sum)
}
minimumSum(4009)

// practice again 

function minimumSumOfFourDigit(number) {
    let array = number.toString().split("").sort()
    console.log("sorted array of numbers: ", array)
    let minimumSum = Number(array[0] + array[2]) + Number(array[1] + array[3])
    console.log("Minimum Sum of the Four Digit:", minimumSum)

}

minimumSumOfFourDigit(4004)






//minimum Sum of four digit number after splitting digits
// input = 2932
// output =52

function minimumSum(num) {
    let arr = num.toString().split("").sort()
    console.log('sorted array:', arr)
    const sum = Number(arr[0] + arr[3]) + Number(arr[1] + arr[2])
    console.log("minimum sum :",sum)
}
minimumSum(4009)






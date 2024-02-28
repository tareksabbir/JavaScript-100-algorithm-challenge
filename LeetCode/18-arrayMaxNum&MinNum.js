// find out the smallest and biggest number

function minMax(arr) {

    let min = Math.min(...arr)
    let max = Math.max(...arr)
    let minMaxArray = [min, max]
    // minMaxArray.push(min, max)
    console.log(minMaxArray)



}
minMax([1, 3, 5, 7, 9])
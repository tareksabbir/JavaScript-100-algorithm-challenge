// for inputArray = [1,2,1], replaceElement = 1 and subtractionElement = 3
// the output should be arrayReplace(inputArray,replaceElement,subtractionElement) = [3,2,1]

function arrayReplace(inputArray, replaceElement, subtractionElement) {

    inputArray.forEach((value, index) => {
        if (value === replaceElement) {
            inputArray[index] = subtractionElement
        }
    })
    //console.log("output array: ", inputArray)


}

arrayReplace([1, 2, 1], 1, 3)

/// way tow

function replacedArrayWay2(inputArray, replaceValue, subtractionValue) {
    let length = inputArray.length
    for(let i = 0; i<length ;i++){
        if(inputArray[i]===replaceValue){
            inputArray[i] = subtractionValue
        }
    }

    console.log(inputArray)


}

replacedArrayWay2([1, 2, 1], 1, 3)
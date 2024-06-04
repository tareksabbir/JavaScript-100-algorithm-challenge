function lengthOfLastNumber(str){

    let strSplit = str.toString().trim().split(" ")
    let strNew= strSplit[strSplit.length -1]
    return strNew.length
}

let arr =["hi sabbir how are you man? "]
console.log(lengthOfLastNumber(arr))
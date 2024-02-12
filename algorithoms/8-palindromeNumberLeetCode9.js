// palindrome number
// input :121
//output true

function palindromeNumber(numbers) {
    let num = numbers.toString().split("").reverse().join("")
    if (parseInt(num) === numbers) {
        console.log(true)
    } else {
        console.log(false)
    }
}
palindromeNumber(323)


// way 2 


function palindromeCheck(numbers){
    let num = numbers.toString().split("").reverse().join("")
    let reverse = parseInt(num) * Math.sign(numbers)
    if(reverse===numbers){
        console.log("it is a palindrome")
    } else{
        console.log("it is not a palindrome")
    }

}

palindromeCheck(-12121)







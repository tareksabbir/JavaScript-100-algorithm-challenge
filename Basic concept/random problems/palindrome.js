// function palindrome(str){
//     console.log(str.split("").reverse().join('') === str)
// }
// palindrome("abba")

// function palindromeNumber(num){
//     console.log(+num.toString().split("").reverse().join("") === num)

// }
// palindromeNumber(123321)


// const palindrome2 =(str)=>{
//     console.log(str.split("").reverse().join('') ===str)
// }
// palindrome2("abbaa")



const palindromePractice30 =(str)=>{
    let newStr  = str.split("").reverse().join("") == str
    //console.log(newStr)
}

palindromePractice30("abba")

const numbersPalindrome  = (num)=>{
    const numArray = +num.toString().split("").reverse().join("") ===num
    console.log(numArray)

}

numbersPalindrome(123321)

// IDEA: basically if we use + operator before any string of number value it will convert that number string into a number  


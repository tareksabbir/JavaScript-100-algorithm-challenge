function palindrome(str){
    console.log(str.split("").reverse().join('') === str)
}
palindrome("abba")

function palindromeNumber(num){
    console.log(+num.toString().split("").reverse().join("") === num)

}
palindromeNumber(123321)
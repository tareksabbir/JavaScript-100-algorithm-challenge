/*
You are given a positive integer num consisting only of digits 6 and 9.

Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).

Example 1:
Input: num = 9669
Output: 9969

Explanation: 
Changing the first digit results in 6669.
Changing the second digit results in 9969.
Changing the third digit results in 9699.
Changing the fourth digit results in 9666.
The maximum number is 9969.

Example 2:
Input: num = 9996
Output: 9999
Explanation: Changing the last digit 6 to 9 results in the maximum number.

Example 3:
Input: num = 9999
Output: 9999
Explanation: It is better not to apply any change.
 */


// var maximum69Number = function (num) {
//     const max = num.toString()
//     for (let i = 0; i < max.length; i++) {
//         return max.replace('6', '9')
//     }
//     return parseInt(max)

// };

// let result = maximum69Number(9996)
//console.log(result)


// using array method

var maximum69Number2 = function (num) {
    let arr = Array.from(num.toString(), (n) => parseInt(n))
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 6) {
            arr[i] = 9
            return Number(arr.join(''))
        }
    }
    return Number(arr.join(''))
    
};

let result2 = maximum69Number2(66969)

//console.log(result2)



function practice(num){
    let arr = Array.from(num.toString(),(n)=>parseInt(n))
    for(let i =0;i<arr.length;i++){
        if(arr[i]===6){
            arr[i]=9
            return Number(arr.join(""))
        }
    }
    return Number(arr.join())

}
console.log(practice(9699))
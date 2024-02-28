/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 */


var isValid = function (s) {
    let stack = []
    let map = { "(": ")", "{": ")", "[": "]" }
    for (let char of s) {
        if (map[char]) {
            console.log(char) // "(" = key 
            console.log(map[char])//")" = value
            stack.push(map[char]) // stack = [")"]
            console.log(stack)

        } else if (stack.pop(map[char]) !== char) {
            return false
        }

    }

    return stack.length === 0

};

//console.log(isValid("()"))


function isValidCheck(s) {
    let stack = []
    let map = { '(': ")", "{": "}", "[": "]" }
    for (let char of s) {
        if (map[char]) {
            stack.push(map[char])
        } else if (stack.pop(map[char]) !== char) {
            return false
        }
    }
    return stack.length === 0

}


console.log(isValidCheck("(({}[]))"))
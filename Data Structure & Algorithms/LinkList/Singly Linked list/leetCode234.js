// palindrome link list
// Given the head of a singly linked list, return true if it is a 
// palindrome
//  or false otherwise.

//  Example 1:
//  Input: head = [1,2,2,1]
//  Output: true

//  Example 2:
// Input: head = [1,2]
// Output: false

var isPalindrome = function (head) {
    let string1 = ''
    let string2 = ''
    while (head !== null) {
        string1 = head.val + string1
        string2 = string2 + head.val
    }
    return string1 === string2

};


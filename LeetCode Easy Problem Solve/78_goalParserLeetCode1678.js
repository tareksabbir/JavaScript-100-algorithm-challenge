/*
You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

Given the string command, return the Goal Parser's interpretation of command.

 

Example 1:

Input: command = "G()(al)"
Output: "Goal"
Explanation: The Goal Parser interprets the command as follows:
G -> G
() -> o
(al) -> al
The final concatenated result is "Goal".
Example 2:

Input: command = "G()()()()(al)"
Output: "Gooooal"
Example 3:

Input: command = "(al)G(al)()()G"
Output: "alGalooG" */



var interpret = function (command) {

    let newString = command.split("")
    let final = []
    for (let i = 0; i < newString.length; i++) {
        if (newString[i] == 'G') {
            final[i] = 'G'

        }

        else if ((newString[i] == '(') && (newString[i + 1] == ')')) {
            final[i] = 'o'
        }

        else if ((newString[i] == '(') && newString[i + 1] == 'a' && newString[i + 2] == 'l' && newString[i + 3] == ')') {
            final[i] = "al"
        }

    }

    return final.join("")


};

//console.log(interpret("(al)G(al)()()G"))


// using replace method 

var interpret2 = function (command) {
    let res = command.replaceAll('()', 'o').replaceAll('(al)', 'al')
    return res
};


console.log(interpret2("(al)G(al)()()G"))

// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".



// Example 1:

// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"
// Example 2:

// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"


var defangIPaddr = function (address) {
    let newIp = ''
    let str = address.split(".")
    let length=str.length
    for (let i=0;i<length;i++) {
        newIp = newIp + str[i] + "[.]"
    }
    return newIp.slice(0,newIp.length-3)


};
defangIPaddr("255.100.50.0")

//way 2



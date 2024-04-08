/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(std, sdw) {
    let unable=0
    while(std.length){
        if(std[0]==sdw[0]){
            std.shift()
            sdw.shift()
            unable=0
        }else{
            std.push(std.shift())
            unable++
            if(unable==std.length) break;
        }
    }
    return std.length
};
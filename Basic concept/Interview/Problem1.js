//QS: what will be the output is ? undefind or new york
//ANS: output will be newYork 


let person = { name: "jon", city: "New York" }
let department = {}
department.student = person
person = null
console.log(department?.student?.city)

//INFO: This is because the department object still holds a reference to the original person object, even though the person variable has been set to null. The student property of department still points to the original person object, and its city property is still "New York".



// create a function that take a number x and a character y (m for mala and f for the female ) and return the name of an ancestor (m/f) or descendant (m/f)

//in this problem her e if the number is negative then it will go the back and if its 0 it should be me or if the number is more then the 0 then it will check more foreword

//example :
// generation(2,f) => grandDaughter
// generation(-3,m) => grate grandFather 
// generation(1,f) => Daughter
// generation(0,f/m) => me 


function generation(num, gender) {
    const genderObjs = {
        "-3": { m: "great grandFather", f: "great grandmother" },
        "-2": { m: "grandFather", f: "grandmother" },
        "-1": { m: "Father", f: "Mother" },
        "0": { m: "me", f: "me" },
        "1": { m: "son", f: "daughter" },
        "2": { m: "grand son", f: "grand daughter" },
        "3": { m: "great grand son", f: "great grand daughter" },

    }
    if (num >= -3 && num <= 3) {
        if (gender !== 'm' && gender !== 'f') return 'invalid gender'
        let keyNum = num.toString()
        if (genderObjs[keyNum] === undefined) return 'out of range'
        if (gender !== undefined) return genderObjs[keyNum][gender]
    } else {
        return ' invalid number '
    }



}

console.log(generation(-1, 'm'))
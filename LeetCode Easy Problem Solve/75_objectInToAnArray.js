// function that converts an object into an array where each element represented a key-value pair from an array of object 

function objectToAnArray(obj) {
    // let array = Array.from(Object.entries(obj))
    // console.log(array)

    console.log( Object.entries(obj))
    console.log( Object.keys(obj))
    console.log(Object.values(obj) )


}

const genderObjs = {
    "-3": { m: "great grandFather", f: "great grandmother" },
    "-2": { m: "grandFather", f: "grandmother" },
    "-1": null,
    "0": { m: "me", f: "me" },
    "1": { m: "son", f: "daughter" },
    "2": { m: "grand son", f: "grand daughter" },
    "3": { m: "great grand son", f: "great grand daughter" },

}

objectToAnArray(genderObjs)
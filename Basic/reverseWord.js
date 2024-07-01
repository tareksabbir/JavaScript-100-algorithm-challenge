const reversed =(str)=>{
    let newstr = str.split(" ").map((e)=> {
        return e.split("").reverse().join("")
    })
    // console.log(newstr.join(" "))
    return newstr.join(" ")
}

let result = reversed("hey man how are you ?")
console.log (result)
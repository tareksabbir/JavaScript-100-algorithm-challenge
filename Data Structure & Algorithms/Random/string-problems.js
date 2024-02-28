// way one 
let strings = 'tarek sabbir'
console.log(strings.split("").reverse().join(""))

// way 2

const stringReverse = (str) => {
    return str.split("").reverse().join("")
}
console.log(stringReverse("bereka bareka cingu"))


// way 3 

function newReverse(string) {
    let reverse = " "
    for (let str of string) {
      reverse = str + reverse

    }
    console.log(reverse)

}
newReverse("fokir")

// way 4

function reduceString (string){
    let str = string.split("")
    str.reduce((total,value)=>{
        return str= value + total
    })
    console.log(str)

}

reduceString("string")




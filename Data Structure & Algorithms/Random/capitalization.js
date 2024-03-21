function capitalization(string) {
    let arr = []
    for (let value of string.split(" ")) {
        arr.push(value[0].toUpperCase() + value.slice(1))
    }
    return arr.join(' ')


}
console.log(capitalization("hello mother fucker how are you ?"))




function cap(str) {
    let arr = []
    for (let n of str.split(' ')) {
        arr.push(n[0].toUpperCase() + n.slice(1))
    }
    console.log(arr.join(" "))

}

cap("hello how are you ?")




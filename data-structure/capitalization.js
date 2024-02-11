function capitalization(string) {
    let arr = []
    for (let value of string.split(" ")) {
        arr.push(value[0].toUpperCase() + value.slice(1))
    }
    return arr.join(" ")


}
console.log(capitalization("hello mother fucker how are you ?"))




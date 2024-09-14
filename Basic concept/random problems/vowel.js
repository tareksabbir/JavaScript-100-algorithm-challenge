const vowel = (str) => {
    const vowelItem = ["a", "e", "i", "o", "u"]
    const text = str.toLowerCase()
    let count = 0
    for (let i of text) {
        if (vowelItem.includes(i)) {
            count = count + 1
        }
    }
    console.log(count)
}

vowel("hello World")


const vowel2 =(str)=>{
    const vowelItem = ["a", "e", "i", "o", "u"]
    let elementArray = []
    str.toLowerCase().split("").forEach(element => {
        if(vowelItem.includes(element)){
            elementArray.push(element)
        }
    });
    console.log(elementArray.length)
}
vowel2("hello world")
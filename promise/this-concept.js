let newObj = {
    name: "tarek",
    bod: 1998,
    father: {
        name: "ali",
        bod: 1965,
        age: function (currentYear, msg) {
            const ages = currentYear - this.bod
            console.log(`${msg} his/her name is ${this.name} & his/her age is ${ages}`)
        }
    }

}

let shihab = {
    name: "shihab",
    bod: 2005
}

let sweety = {
    name: "sweety",
    bod: 1995
}

newObj.father.age.call(newObj, 2024, "hey ,")

newObj.father.age.apply(shihab, [2024, "you know ?"])


let bindMethod = newObj.father.age.bind(sweety, 2024, 'hi')


bindMethod()



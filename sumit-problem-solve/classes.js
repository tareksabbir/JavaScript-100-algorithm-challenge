class Car {
    constructor(name, model) {
        this.name = name
        this.model = model

    }
    // method to display the car 
    run() {
        console.log(`${this.name} is running now `)
    }
    stop() {
        console.log(`${this.name} is stop now `)
    }
}

let myCar1 = new Car("ford", 2017)
let myCar2 = new Car("toyota", 2017)

// console.log(myCar1)
// console.log(myCar2)


// myCar1.run()
// myCar2.run()
// myCar1.stop()



class Person {
    constructor(name, born) {
        this.name = name
        this.born = born

    }
    showInfo() {
        let date = new Date().getFullYear()
        let age = date - this.born
        console.log(`the persons name is ${this.name} and his age is ${age}. He is born in ${this.born}`)
    }
}

const Person1 = new Person("Alex", 1999)

Person1.showInfo()

console.log(Person1)
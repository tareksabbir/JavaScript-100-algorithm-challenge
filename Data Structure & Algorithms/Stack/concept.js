// stack last in first out 

class Stack {
    constructor() {
        this.item = []
        this.count = 0
    }
    push(element) {

        this.item.push(element)
        this.count++
        console.log(this.item)

    }
    pop() {
        console.log(this.item)
        this.item.pop()
        this.count--
    }

}

const stack = new Stack()

stack.push(100)
stack.push(200)
stack.push(300)
stack.push(400)
console.log(stack.count)

stack.pop()
stack.pop()
stack.pop()
stack.pop()
console.log(stack.count)
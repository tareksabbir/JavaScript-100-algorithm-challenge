// first in first out 

// let a = []
// a.push(1) // add // Enqueue 
// a.push(2)
// a.push(3)
// a.push(4)
// a.push(5)

// console.log(a)

// a.shift()// remove // Dequeue
// a.shift()// remove 
// console.log(a)


// class concept of queue

class Queue {
    constructor() {
        this.item = []
    }

    enqueue(element) {
        this.item.push(element)
    }

    dequeue() {
        if (this.isEmpty) {
            console.log("underFlow")
        } else {
            this.item.shift()
        }
    }
    peek() {
        if (this.isEmpty) {
            console.log(`the queue is empty`)
        } else {
            console.log("Peek element:", this.item[0])
        }
    }
    tail() {
       console.log(this.item[this.item.length-1])
    }

    isEmpty() {
        this.item.length == 0 ? true : false
    }

    show() {
        console.log(this.item)
    }
}

let queue = new Queue()

queue.enqueue(5)
queue.enqueue(6)
queue.enqueue(7)
queue.enqueue(8)
queue.show()

queue.tail()


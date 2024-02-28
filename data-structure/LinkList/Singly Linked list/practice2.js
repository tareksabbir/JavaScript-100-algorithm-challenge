class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkList {
    constructor() {
        this.head = null
    }
    addToTheFirst(data) {
        const newNode = new Node(data)
        newNode.next = this.head
        this.head = newNode
    }

    addToTheLast(data) {

        const newNode = new Node(data)
        if (!this.head) {
            newNode.next = this.head
            return
        }
        let current = this.head
        while (current.next) {
            current = current.next
        }
        current.next = newNode
    }
    addToSpecificIndex(index, data) {
        if (index < 0 || index > this.size()) {
            console.log('invalid index')
        }
        const newNode = new Node(data)
        if (index === 0) {
            newNode.next = this.head
            this.head = newNode
            return
        }
        let current = this.head
        for (let i = 0; i < index - 1; i++) {
            current = current.next
        }

            newNode.next = current.next
            current.next = newNode
        
        


    }
    removeFromTop() {
        if (!this.head) {
            return
        }
        this.head = this.head.next
    }
    removeFromEnd() {
        if (!this.head) {

            return
        }
        let current = this.head
        while (current.next.next) {
            current = current.next
        }
        current.next = null
    }

    removeFromAny(index) {
        if (index < 0 || index > this.size()) {
            console.log('invalid index')
        }
        if (index === 0) {
            this.head = this.head.next
            return
        }
        let current = this.head
        for (let i = 0; i < index - 1; i++) {
            current = current.next
        }
        if (current.next) {
            current.next = current.next.next
        }
    }

    size() {
        let count = 0
        let current = this.head
        while (current.next) {
            count++
            current = current.next
        }
        return count
    }
    print() {
        let array = []
        let current = this.head
        while (current) {
            array.push(current.data)
            current = current.next
        }
        return array
    }

}

let list2 = new LinkList()
list2.addToTheFirst(50)
list2.addToTheFirst(40)
list2.addToTheFirst(30)
list2.addToTheFirst(20)
list2.addToTheFirst(10)
console.log('addTop', list2.print())
list2.addToTheLast(60)
console.log('addLast', list2.print())
list2.removeFromTop()
console.log('removeTop', list2.print())
list2.removeFromEnd()
console.log('removeEnd', list2.print())
list2.addToSpecificIndex(4, 100)
console.log('addAny', list2.print())

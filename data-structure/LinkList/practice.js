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
    addNode(data) {
        const newNode = new Node(data)
        newNode.next = this.head
        this.head = newNode
    }
    addNodeLast(data) {
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

    addAtAnyIndex(index, data) {
        if (index < 0 || index > this.size()) {
            console.log('invalid index')
        }
        let newNode = new Node(data)
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

    removeTopNode() {
        if (!this.head) {
            return
        }
        this.head = this.head.next
    }
    removeEndNode() {
        if (!this.head) {
            return
        }
        let current = this.head
        while (current.next.next) {
            current = current.next
        }
        current.next = null
    }

    size() {
        let count = 0
        let current = this.head
        while (current) {
            count++
            current = current.next
        }
        return count
    }
    print() {
        let current = this.head
        let outPut = []
        while (current) {
            outPut.push(current.data)
            current = current.next

        }
        return outPut
    }
}

let list1 = new LinkList()
list1.addNode(10)
list1.addNode(20)
list1.addNode(30)
list1.addNodeLast(40)
list1.addAtAnyIndex(2, 50)
console.log(list1.print())
list1.removeEndNode()
console.log(list1.print())
list1.removeTopNode()
console.log(list1.print())

//list1.print()



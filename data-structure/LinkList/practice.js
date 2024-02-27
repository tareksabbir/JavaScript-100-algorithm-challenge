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
    size() {
        let count = 0
        let current = this.head
        while (current) {
            count++
            current = current.next
        }
        return count
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
    print() {
        let current = this.head
        while (current) {
            console.log(current.data)
            current = current.next
        }
    }
}

let list1 = new LinkList()
list1.addNode(10)
list1.addNode(20)
list1.addNode(30)
list1.addNodeLast(40)
list1.addAtAnyIndex(2, 50)
list1.print()


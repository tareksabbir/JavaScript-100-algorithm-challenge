// doubly linked list 

class Node {
    constructor(data) {
        this.data = data
        this.prev = null
        this.next = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
    }

    addToTheTop(data) {
        const newNode = new Node(data)
        newNode.next = this.head
        if (this.head) {
            this.head.prev = newNode
        }
        this.head = newNode
    }
    addLast(data) {
        const newNode = new Node(data)
        if (!this.head) {
            this.head = newNode
            return
        }
        let current = this.head
        while (current.next) {
            current = current.next
        }
        newNode.prev = current
        current.next = newNode
    }


}
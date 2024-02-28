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

}
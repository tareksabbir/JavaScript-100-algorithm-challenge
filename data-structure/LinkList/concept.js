// link list 

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkList {
    constructor() {
        this.head = null;
    }

    addFirstNode(data) {
        const newNode = new Node(data)
        newNode.next = this.head
        this.head = newNode
    }

    addLastNode(data,) {
        const newNode = new Node(data)
        if (!this.head) {
            this.head = newNode
            return
        }
        let current = this.head
        while (current.next) {
            current = current.next
        }
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


let link = new LinkList()

link.addFirstNode(20)
link.addFirstNode(30)
link.addFirstNode(40)
link.addLastNode(15)
link.addLastNode(35)
link.addLastNode(55)
link.print()








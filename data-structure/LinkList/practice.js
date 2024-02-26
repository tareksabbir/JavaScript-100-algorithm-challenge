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
    addFirstNode(data) {
        let newNode = new Node(data)
        newNode.next = this.head
        this.head = newNode
    }
    print(){
        let current = this.head
        while(current){
            console.log(current.data)
            current = current.next
        }
    }
}


let link = new LinkList()

link.addFirstNode(2)
link.addFirstNode(3)
link.print()
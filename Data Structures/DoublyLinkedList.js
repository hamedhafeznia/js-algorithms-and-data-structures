class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DubublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        var newNode = new Node(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
            this.length ++;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
            this.length++;
            return this;
        }
    }

    shift() {
        if(!this.length) {
            return undefined
        } else if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            var oldHead = this.head;
            this.head = oldHead.next;
            this.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return this
    }

    unshift(val) {
        var newNode = new Node(val);
        if(!this.length) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode
        }
        this.length++;
        return this;
    }
    
}
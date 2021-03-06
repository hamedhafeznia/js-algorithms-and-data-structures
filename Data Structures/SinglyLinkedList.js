class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = null;
    }

    push(val) {
        var newNode = new Node(val);
        if(!this.head) {
            this.head =  newNode;
            this.tail = this.head;

        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if(!this.head) return undefined
        var current = this.head;
        var newTail = current
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
            this.head =  null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }

    unShift(val) {
        var newNode = new Node(val)
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this

    }


    get(index) {
        if(index < 0 || index > this.length) return undefined;
        var counter = 0;
        var current = this.head;
        while( counter !== index ) {
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index, value) {
        var foundValue = this.get(index)
        if(foundValue) {
            foundValue.val = value
            return true
        }
        return false
    }

    insert(index, val) {
        if(index < 0 || index > this.length) return false
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unShift(val)
        var newNode = new Node(val);
        var prev = this.get(index - 1)
        var temp = prev.next
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    remove(index) {
        if(index < 0 || index >= this.length) return false;
        if(index === this.length - 1) return this.pop();
        if(index === 0) return this.shift(val);
        var previousNode = this.get(index - 1);
        var removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }

    reverse() {
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;
        for(var i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
        
    }

}

var list = new SinglyLinkedList();
console.log(list.push(234))
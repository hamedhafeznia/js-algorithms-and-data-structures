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

    get(index) {
        if(index < 0 || index >= this.length) {
            return null
        }

        if(index <= this.length/2) {
            var count = 0;
            var current = this.head;
            while (count !== index) {
                current = current.next
                count++
            }
            return current
        } else {
            var count = this.length - 1;
            var current = this.tail;
            while (count !== index) {
                current = current.prev
                count--
            }
            return current
        }
    }

    set(index, value) {
        var result = this.get(index)
        if(result != null) {
            result.val = value
            return true
        } else {
            return false
        }
    }

    insert(index, value) {
        if(index > this.length || index < 0) {
            return false
        }
        if(index === 0) {
            this.unshift(value)
            
        }
        if(index === this.length) {
            this.push(value)
        } 
        else {
            
            var beforNode = this.get(index-1)   
            var afterNode = beforNode.next
            var newNode = new Node(value)
            
            beforNode.next = newNode , newNode.prev = beforNode
            newNode.next = afterNode , afterNode.prev = newNode
            this.length++
            return true
            
        }
    }

    remove(index) {
        if(index < 0 || index >= this.length) return undefined
        if(index === 0) !!this.shift()
        if(index === this.length - 1) !!this.pop()

        var removeNodes = this.get(index)
        removeNodes.prev.next = removeNodes.next;
        removeNodes.next.prev = removeNodes.prev;
        removeNodes.next = null;
        removeNodes.prev = null;
        this.length--;
        return removeNodes
        
    }

    
}
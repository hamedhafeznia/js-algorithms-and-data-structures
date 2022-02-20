class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enQueue(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  deQueue() {
    if (!this.first) {
      return null;
    }
    if (this.size === 1) {
      this.first = null;
      this.last = null;
      this.size--;
    } else {
      var temp = this.first;
      this.first = this.first.next;
      this.size--;
      return temp.value;
      
    }
  }
}

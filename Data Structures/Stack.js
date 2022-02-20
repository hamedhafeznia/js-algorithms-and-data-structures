class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class stack {
  constructor(val) {
    this.first = null;
    this.last = null;
    this.size = null;
  }

  push(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }

  pop() {
    if (!this.first) {
      return null;
    }
    var temp = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
      this.size--;
    }
    return temp.value;
  }
}

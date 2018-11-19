class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class SLL {
  constructor() {
    this.head = null;
  }
  back() {
    if (!this.head) return null;
    let runner = this.head;
    while (runner.next) runner = runner.next;
    return runner.val;
  }
  pushBack(val) {
    let newNode = new Node(val);
    if (!this.head) this.head = newNode;
    else {
      var runner = this.head;
      while (runner.next) runner = runner.next;
      runner.next = newNode;
    }
  }
  popBack() {
    if (!this.head) return null;
    let returnVal;
    if (!this.head.next) {
      returnVal = this.head.val;
      this.head = null;
      return returnVal;
    }
    var runner = this.head;
    while (runner.next.next) runner = runner.next;
    returnVal = runner.next.val;
    runner.next = null;
    return returnVal;
  }
  pushFront(val) {
    let oldHead = this.head;
    this.head = new Node(val);
    this.head.next = oldHead;
  }
  popFront() {
    var returnVal = null;
    if (this.head) {
      returnVal = this.head.val;
      this.head = this.head.next;
    }
    return returnVal;
  }
  contains(val) {
    var runner = this.head;
    while (runner) {
      if (runner.val === value) return true;
      runner = runner.next;
    }
    return false;
  }
  removeVal(val) {
    if (!this.head) return false;
    if (this.head.val === value) {
      this.head = this.head.next;
      return true;
    }
    var runner = this.head;
    while (runner.next) {
      if (runner.next.val === val) {
        runner.next = runner.next.next;
        return true;
      }
      runner = runner.next;
    }
    return false;
  }
  reverse() {
    if (!this.head) return false;
    // for (let i = 0; i < 2; i++) {
    let runner = this.head;
    let walker = this.head;
}

module.exports = { SLL };

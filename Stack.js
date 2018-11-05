// Check all test cases

class Stack {
  constructor(size) {
    this.size = size;
    this.stack = [];
    this.top = -1;
  }

  push(item) {
    this.isFull()
      ? console.log("Stack is full")
      : (this.top++, (this.stack[this.top] = item));
  }
  pop() {
    let item;
    this.isEmpty()
      ? console.log("Stack is empty")
      : ((item = this.stack[this.top]), (this.top = this.top - 1));
    return item;
  }
  isFull() {
    return this.top >= this.size - 1;
  }
  isEmpty() {
    return this.top === -1;
  }
}

let newStack = new Stack(6);
newStack.push(10);
newStack.push(11);
newStack.push(12);
newStack.push(13);
newStack.push(14);
newStack.push(15);
newStack.push(16);

// console.log(newStack.pop());

// while (!newStack.isEmpty()) {
//   console.log(newStack.pop());
// }

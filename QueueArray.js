//pass all test cases ?

class QueueArray {
  constructor(size) {
    this.rear = -1;
    this.front = -1;
    this.size = size;
    this.list = [];
    for (var i = 0; i < this.size; i++) {
      this.list[i] = undefined;
    }
  }

  isFull() {
    return this.list.indexOf(undefined) === -1;
  }
  isEmpty() {
    let count = 0;
    for (let item in this.list) {
      this.list[item] === undefined ? count++ : undefined;
    }
    return count === 5;
  }
  queue(item) {
    // this.rear === 5 ? (this.rear = -1) : undefined;
    this.front === -1 ? (this.front = 0) : undefined;
    this.isFull()
      ? console.log("queue is full")
      : (this.rear++,
        this.rear === 5 ? (this.rear = 0) : undefined,
        (this.list[this.rear] = item));
  }
  dequeue() {
    let item;
    this.isEmpty()
      ? console.log("queue is empty")
      : ((item = this.list[this.front]),
        (this.list[this.front] = undefined),
        this.front++);
    this.front === 5 ? (this.front = 0) : undefined;
    return item;
  }
}

let q = new QueueArray(5);
// console.log(q.queue);
// console.log(q);
// console.log(q.isFull());
// console.log(q.isEmpty());
q.queue(1);
// console.log(q);
q.queue(2);
q.queue(3);
q.queue(4);
q.queue(5);
console.log(q);

console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());

q.queue(5);
q.queue(4);
q.queue(3);

console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q);

q.queue(2);
q.queue(1);

q.queue(5);
q.queue(4);
q.queue(3);
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q);

// q.queue(10);
// q.queue(2);
// q.queue(3);
// // q.queue("hey");
// console.log(q.dequeue());
// q.queue("hey");
// console.log(q);
// console.log(q.dequeue());
// console.log(q);
// console.log(q.dequeue());

// console.log(q.dequeue());

// console.log(q.dequeue());
// console.log(q);

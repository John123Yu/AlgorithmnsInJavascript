class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class StackLinkedList {
  constructor(head) {
    this.top = null;
  }
  push(value) {
    let newNode = new Node(value, null);
    if (this.top === null) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
  }
  pop() {
    let node = null;
    this.top === null
      ? console.log("stack is empty")
      : ((node = this.top.value), (this.top = this.top.next));
    return node;
  }
  display() {
    let n = this.top;
    while (n != null) {
      console.log(n.value);
      n = n.next;
    }
  }
}

let st = new StackLinkedList();
st.push("john");
st.push("tom");
st.push("Fred");
st.push("Albert");
st.push("jose");
st.push("blaman");

while (st.top) {
  console.log(st.pop());
}

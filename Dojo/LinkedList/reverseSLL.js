var { SLL } = require("./singlyLL");

let sll = new SLL();
// console.log(sll.popBack);
sll.pushBack(1);
sll.pushBack(2);
sll.pushBack(3);
sll.pushBack(4);
sll.pushBack(5);

sll.reverse();

console.log(sll);

.  . 
w,  r,
1,2,3,4,5;//2 to 4 || w.n to r.n, 3 to 2 || r to w.n, 1 to 3 || w to r

  w   r
1,3,2,4,5//2 to 5, 4 to 2, 3 to 4






let factorial = val => {
  console.log("here");
  if (val === 1) return val;
  return factorial(val - 1) * val;
};

// console.log(factorial(1));
// console.log(factorial(2));
// console.log(factorial(3));
// console.log(factorial(4));
// console.log(factorial(5));

let storage_func = () => {
  let stored_factorials = { 0: 1, 1: 1 };
  return function faster(val) {
    if (stored_factorials[val]) return stored_factorials[val];
    if (stored_factorials[val - 1] > 0) {
      var answer = stored_factorials[val - 1] * val;
    } else {
      var answer = faster(val - 1) * val;
    }
    stored_factorials[val] = answer;
    console.log(answer);
    console.log(stored_factorials);
    return answer;
  };
};

let faster_factorial = storage_func();
faster_factorial(2);
// console.log(faster_factorial(1));
// console.log(faster_factorial(2));
// console.log(faster_factorial(3));
// console.log(faster_factorial(4));

// faster_factorial(4);
console.log(faster_factorial(5));

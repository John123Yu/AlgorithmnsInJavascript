// page 39
let array_1 = [5, 3, 2, 1];
let array_2 = [4, 1, 2, 3];

function min_to_front(array) {
  let min = array[0];
  let min_index = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
      min_index = i;
    }
  }
  let temp = array[0];
  array[0] = array[min_index];
  array[min_index] = temp;
  return array;
}

console.log(min_to_front(array_1));
console.log(min_to_front(array_2));

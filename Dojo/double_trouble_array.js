// page 43
let array_1 = [5, 3, 2, 1];
let array_2 = [4, 1, 2, 3];

function double_trouble(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i * 2] = arr[i];
    arr[i * 2 + 1] = arr[i];
  }
  return arr;
}

console.log(double_trouble(array_1));
console.log(double_trouble(array_2));

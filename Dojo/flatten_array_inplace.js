let flatten_inplace = arr => {
  // while (isNested(arr)) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "object") {
      for (let j = arr[i].length - 1; j > 0; j--) {
        arr[arr.length] = arr[i][j];
      }
      arr[i].length > 0 ? (arr[i] = arr[i][0]) : arr.splice(i, 1);
    }
  }
  // }
  return arr;
};

let isNested = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "object") return true;
  }
  return false;
};

let arr_1 = [1, 2, [1, 2], 3];
let arr_2 = [1, 2, 3, 4];
let arr_3 = [[2, 3], 4, 5];
let arr_4 = [1, [2, 3], 4, []];

console.log(flatten_inplace(arr_1));
console.log(flatten_inplace(arr_2));
console.log(flatten_inplace(arr_3));
console.log(flatten_inplace(arr_4));

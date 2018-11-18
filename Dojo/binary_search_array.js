function binary_search(arr, value) {
  let new_arr = arr.slice();
  let arr_len = new_arr.length;
  let middle = Math.floor(arr_len / 2);
  if (new_arr[middle] === value) return true;
  if (value > new_arr[middle]) {
    return binary_search(new_arr.splice(middle + 1, arr_len), value);
  } else if (value < new_arr[middle]) {
    return binary_search(new_arr.splice(0, middle), value);
  }
  return false;
}

let arr_1 = [1, 3, 4, 5, 8, 9, 12, 15, 16];
let arr_2 = [1, 3, 4, 5, 8, 9, 12, 15, 16, 17];

console.log(binary_search(arr_1, 7));
console.log(binary_search(arr_2, 7));

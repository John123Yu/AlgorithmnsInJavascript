function reverse_string(string) {
  let arr = string.split("");
  let arr_len = arr.length;
  for (let i = 0; i < arr_len; i++) {
    let temp = arr[arr_len - i - 1];
    arr[arr_len - i - 1] = arr[i];
    arr[i] = temp;
    if (i + 1 >= Math.floor(arr_len / 2)) break;
  }
  return arr;
}

console.log(reverse_string("JOHN"));
console.log(reverse_string("NHOJ"));

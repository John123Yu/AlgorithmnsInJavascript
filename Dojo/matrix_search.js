function matrix_search(haystack, needle) {
  if (needle.length > haystack.length) return false;
  if (needle[0].length > haystack[0].length) return false;
  let needle_head = needle[0][0];
  for (let i = 0; i < haystack.length; i++) {
    // console.log(haystack[i].length);
    let hay_row = haystack[i];
    let hay_row_len = hay_row.length;
    for (let j = 0; j < hay_row_len; j++) {
      if (hay_row[j] === needle_head) {
        let haystack_trunc = haystack.splice(i, needle.length);
        let outer = [];
        for (let k = 0; k < haystack_trunc.length; k++) {
          let inner = haystack_trunc[k].filter((item, inner_index) => {
            return inner_index >= j && inner_index < j + needle[0].length;
          });
          outer.push(inner);
        }
        if (compare_arrays(outer, needle)) return true;
      }
    }
  }
  return false;
}

function compare_arrays(first, second) {
  console.log(first);
  console.log(second);
  if (first.length === 0) return false;
  for (let i = 0; i < first.length; i++) {
    for (let j = 0; j < first[i].length; j++) {
      if (first[i][j] !== second[i][j]) return false;
    }
  }
  return true;
}

let haystack = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
let needle = [[5, 6, 7], [9, 10, 11], [13, 14, 15]];

console.log(matrix_search(haystack, needle));

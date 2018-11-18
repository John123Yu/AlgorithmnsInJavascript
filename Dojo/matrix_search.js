function matrix_search(haystack, needle) {
  if (needle.length > haystack.length) return false;
  if (needle[0].length > haystack[0].length) return false;
  let needle_head = needle[0][0];
  for (let i = 0; i < haystack.length; i++) {
    for (let j = 0; j < haystack[i].length; j++) {}
  }
}

function isPalindrome(string) {
  let string_len = string.length;
  let palindrome = true;
  for (let i = 0; i < string_len; i++) {
    if (string[i] !== string[string_len - i - 1]) {
      palindrome = false;
    }
    if (i + 1 > string_len / 2) {
      break;
    }
  }
  return palindrome;
}

function longestPalindrome(string) {
  let string_len = string.length;
  for (let i = string_len; i > 0; i--) {
    for (let j = 0; j <= string_len - i; j++) {
      if (isPalindrome(string.slice(j, i + j))) {
        return string.slice(j, i + j);
      }
    }
  }
}

console.log(longestPalindrome("what up, daddy-o"));
console.log(longestPalindrome("Yikes! my favorite racecar erupted!"));

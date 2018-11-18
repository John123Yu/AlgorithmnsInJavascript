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

console.log(isPalindrome("racecar"));
console.log(isPalindrome("Dud"));
console.log(isPalindrome("dudeedud"));
console.log(isPalindrome("usu"));

console.log("apple".slice(1, 4));

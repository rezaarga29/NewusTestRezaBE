function isPalindrome(x) {
  const str = x.toString();

  const reversedStr = str.split("").reverse().join("");

  return str === reversedStr;
}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome("IAI"));

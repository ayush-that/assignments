/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let strnew = str.toLowerCase();
  let arr = new Array();

  for (let i = strnew.length; i >= 0; i--) {
    arr.push(strnew[i]);
  }
  return arr.join("") == strnew;
}

module.exports = isPalindrome;

/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  let vowels = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] == "a") {
      vowels += 1;
    }
    if (str[i] == "e") {
      vowels += 1;
    }
    if (str[i] == "i") {
      vowels += 1;
    }
    if (str[i] == "o") {
      vowels += 1;
    }
    if (str[i] == "u") {
      vowels += 1;
    }
  }
  return vowels;
}
console.log(countVowels("hello"));

module.exports = countVowels;

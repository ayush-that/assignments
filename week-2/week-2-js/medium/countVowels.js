/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  let vowels = 0;
  strLow = str.toLowerCase();

  for (let i = 0; i < strLow.length; i++) {
    if (strLow[i] == "a") {
      vowels += 1;
    }
    if (strLow[i] == "e") {
      vowels += 1;
    }
    if (strLow[i] == "i") {
      vowels += 1;
    }
    if (strLow[i] == "o") {
      vowels += 1;
    }
    if (strLow[i] == "u") {
      vowels += 1;
    }
  }
  return vowels;
}

module.exports = countVowels;

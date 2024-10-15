/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const arr1 = new Array();
  const arr2 = new Array();

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  for (let i = 0; i < str1.length; i++) {
    arr1.push(str1[i]);
  }

  for (let i = 0; i < str2.length; i++) {
    arr2.push(str2[i]);
  }

  return arr1.sort().toString() == arr2.sort().toString();
}

console.log(isAnagram("hello", "elLoH"));

module.exports = isAnagram;

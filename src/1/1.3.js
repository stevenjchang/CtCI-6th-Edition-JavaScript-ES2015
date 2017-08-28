// URLify

// Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string. 

// EXAMPLE

// Input: "Mr John Smith   ", 13
// Output: "Mr%20John%20Smith"

const urlify = (str, trueLength) => {
  let url = '';
  for (let i = 0; i < trueLength; i++) {
    let letter = str[i];
    if (letter === ' ') {
      url += '%20';
    } else {
      url += letter;
    }
  }
  return url;
};

// urlify("Mr John Smith    ", 13);
urlify('nospaces', 8);
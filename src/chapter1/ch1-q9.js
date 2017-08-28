'use strict';

/**
 * Duplicate the rotated string, if the substring being searched is a different
 * rotation of the string then it will be a substring of the new string. Both
 * strings must be the same length.
 *
 * N = |str1|
 * Time: O(N)
 * Additional space: O(N)
 *
 * @param  {string}  str1   First string
 * @param  {string}  str2   String to check if it is a rotated version of str1
 * @return {boolean}        True if str1 and str2 are rotated versions of eachother, otherwise false
 */
export function _isRotatedSubstring(str1, str2) {
  if (!str1 || !str2) {
    throw new Error('invalid input');
  }
  if (str1.length !== str2.length) {
    return false;
  }
  return isSubstring(str1 + str1, str2);
}

// Implementation of isSubstring function which is defined in question
// can only be called once
function isSubstring(str, substr) {
  return str.includes(substr);
}


export function isRotatedSubstring(str1, str2) {
  if (!str1 || !str2) {
    throw new Error('invalid input');
  }
  if (str1.length !== str2.length) {
    return false;
  }
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === str2[0] && str1[i] !== ' ') {
      return str2 === rotatedString(str1, i);
    }
  }
  return false;
}
// I did it this way, forgot about the trick of doubling str one (str1 + str1)
// also didn't know about the str.includes()
let rotatedString = (str, i) => {
  return str.substring(i) + str.substring(0, i);
};
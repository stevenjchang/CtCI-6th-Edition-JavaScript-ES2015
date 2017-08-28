'use strict';

/**
 * Scan through both strings's at the same time, when a difference is
 * encountered:
 *   * if this is the first edit:
 *     * if strings are the same length then consider it a replacement
 *     * if strings are different lengths then consider it a delete from the longer string
 *   * if this is the second edit then return false
 *
 * N = max(|str1|, |str2|)
 * Time: O(N)
 * Additional space: O(1)
 *
 * @param  {string}  str1 The first string
 * @param  {string}  str2 The second string
 * @return {boolean}      True if strings are 0 or 1 edit apart, otherwise false
 */
export function _isOneOrLessAway(str1, str2) {
  // if lengths differ by more than 1 then can't be true
  if (Math.abs(str1.length - str2.length) > 1) {
    return false;
  }

  let isEdited = false;
  for (let i = 0, j = 0; i < str1.length && j < str2.length; ++i, ++j) {
    if (str1[i] !== str2[j]) {
      if (isEdited) {
        // second edit
        return false;
      }

      if (str1.length > str2.length) {
        --j; // decrease j, we are deleting char from str1
      }
      else if (str1.length < str2.length) {
        --i; // decrease i, we are deleting char from str2
      }
      isEdited = true;
    }
  }

  return true;
}

export function isOneOrLessAway(str1, str2) {
  let max = Math.max(str1.length, str2.length);
  let min = Math.min(str1.length, str2.length);
  if (max === min) {
    return checkReplaceChar(str1, str2);
  } else if (max - min === 1) {
    let longerStr  = max === str1.length ? str1: str2;
    let shorterStr = min === str1.length ? str1: str2;
    return checkAddChar(longerStr, shorterStr);
  } else {
    return false;
  }
}

//helper functions
let checkReplaceChar = (str1, str2) => {
  let unmatched = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      unmatched++;
    }
  }
  return unmatched < 2;
};

let checkAddChar = (long, short) => {
  let unmatched = 0;
  for (let i = 0; i < short.length; i++) {
    if (long[i] !== short[i]) {
      long = long.slice(0,i) + long.slice(i+1);
      unmatched++;
      if (unmatched > 1) {
        break;
      }
    }
  }
  return unmatched < 2;
};
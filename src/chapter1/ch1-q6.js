'use strict';

/**
 * Takes an input string and counts contiguous sequences of the same character
 * and replaces them with XC (X = count, C = character).
 *
 * N = |str|
 * Time: O(N)
 * Additional space: O(N)
 *
 * @param  {string} str [description]
 * @return {[type]}     [description]
 */
export function _compressString(str) {
  if (!str) {
    return str;
  }

  let cStr = '';
  for (let i = 0; i < str.length; ++i) {
    let char = str[i],
      start = i;
    while (i + 1 < str.length && char === str[i + 1]) {
      ++i;
    }
    // JS does not have a StringBuilder/StringBuffer style class for creating strings
    // string concatenation has been heavily optimised in JS implementations and
    // is faster than creating a string via an array then using a .join('') at the end
    cStr += (i - start + 1) + char;
  }

  return cStr.length < str.length ? cStr : str;
}

export function compressString(str) {
  if (str === null || str === undefined) {
    return str;
  }
  let result = '';
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let prev  = str[i - 1] || str[0];
    let curr  = str[i];
    // console.log('count', count)
    if (i === str.length - 1 && prev === curr) {
      result += ('' + (count + 1)) + prev;      
    } else if (i === str.length - 1 && prev !== curr) {
      result += ('' + count) + prev + '1' + curr;
    } else if (prev === curr) {
      count++;
    } else if (prev !== curr) {
      result += ('' + count) + prev;
      count = 1;
    } 
  }
  return result.length < str.length ? result : str;
}

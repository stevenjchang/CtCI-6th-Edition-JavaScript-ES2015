// One Away

// There are threee types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.

// EXAMPLE
// pale, ple -> true 
// pales, pale -> true 
// pale, bale -> true 
// pale, bake -> false

function isOneOrLessAway(str1, str2) {
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
isOneOrLessAway('st', 'st');
// console.log('console =>', isOneOrLessAway('45678','1239'));
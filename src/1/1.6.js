// String Compression

// Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a - z).

// export 
function compressString(str) {
  let result = '';
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let prev  = str[i - 1] || str[0];
    let curr  = str[i];
    if (i === str.length - 1) {
      result += prev + ('' + (count + 1));      
    } else if (prev === curr) {
      count++;
    } else if (prev !== curr) {
      result += prev + ('' + count);
      count = 1;
    } 
  }
  return result;
}

compressString('abc');
/*
let result = str[0]
iterate str from index 1
  let count = 1;
  if prev === curr 
    count++
  else if curr !== prev, 
    result += curr + ('' + count)
return result
*/
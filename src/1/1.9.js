// String Rotation 

// Assume you have a method isSubstring which checks if one word is asubstring of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring (e.g.,"waterbottle"is a rotation of"erbottlewat").

function isRotatedSubstring(str1, str2) {
  console.log('**', str1.length, str2.length)
  if (str1.length !== str2.length) {
    return false;
  }
  for (let i = 0; i < str1.length; i++) {
    console.log(i, 'i')
    if (str1[0] === str2[i]) {
      console.log('str1 =>', str1) 
      console.log('str2 =>', rotatedString(str2, i));
      
      return str1 === rotatedString(str2, i);
      return true;
    }
  }
}
let rotatedString = (str, i) => {
  return str.substring(i) + str.substring(0, i);
};

let b = "a b c d e f g h i j k l m n o p q r s t u v x y z 0 1 2 3 4 5 6 7 8 9 A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
let a = "b c d e f g h i j k l m n o p q r s t u v x y z 0 1 2 3 4 5 6 7 8 9 A B C D E F G H I J K L M N O P Q R S T U V W X Y Za ";
console.log(isRotatedSubstring(a,b));
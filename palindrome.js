
// Write a function isPalindrome(x)
// that returns true if x is a palindrome,
// otherwise false.
//
// Palindromes are words that are the same
// going forwards and backwards. Examples:
//
// i
// dod
// meeteem
// TrickirT

function isPalindrome(str){
  var lenMinusOne = str.length - 1;
   var halfLen = Math.floor(str.length / 2);

   for (var i = 0; i < halfLen; ++i) {
       if (str[i] != str[lenMinusOne - i]) {
           return false;
       }
   }
   return true;
}

// tests

console.assert( isPalindrome("tacocat") === true, "first")
console.assert( isPalindrome("Tacocat") === false, "second")
console.assert( isPalindrome("racecar") === true, "third")
console.assert( isPalindrome("cowboy") === false, "fourth" )

// Given an arbitrary input string, return the first
// non-repeated character in the string.
// For example:
// firstNonRepeatedCharacter(‘ABA’); // => ‘B’
// firstNonRepeatedCharacter(‘AABCABD’); // => ‘C’
function firstNonRepeatedCharacter(str){
  for(var i = 0; i < str.length; i++){
    var chr = string.charAt(i);
    if(str.indexOf(chr) === i && str.index(c, i + 1) === -1) {
      return c;
    }
  }
  return null;
}

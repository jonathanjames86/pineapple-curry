// Write a function called ABCheck that takes a string parameter and return true
// if the characters a and b are separated by exactly 3 places anywhere
// in the string at least once (ie. "lane borrowed" would result in true
// because there is exactly three characters between a and b).
// Otherwise return false.
function ABCheck(str){
  var i;
  for(i = 0; i < str.length; i++){
    if(str[i] === 'a' && str[i + 4] === 'b' || str[i] === 'b' && str[i + 4] === 'a'){
      return true;
    }
  }
  return false;
}

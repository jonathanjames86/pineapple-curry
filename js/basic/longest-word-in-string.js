// Write a function that returns the longest word(s)
// from a sentence.  The function should not return
// any duplicate words (case-insensitive).
function longestWord(str){
	var newStr = str.split(' ');
	var longest = 0;
	var word = '';
	for (var i = 0; i < newStr.length; i++){
		if(newStr[i].length > longest){
			longest = newStr.length;
			word = newStr[i];
		}
	}
	return word;
}

longestWord("I think you should consider the factoidss");

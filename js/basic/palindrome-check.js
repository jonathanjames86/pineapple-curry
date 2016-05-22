// check if something's a palindrome
function palindrome(str){
	if(str === str.split('').reverse().join('')){
		return true;
	}
	return false;
}

palindrome();

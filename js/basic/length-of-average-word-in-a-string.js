// find the average length of each word in a string
function average(str){
	var newStr = str.split(' ');
	var total = 0;
	for(var i = 0; i < newStr.length; i++){
		total = total + newStr[i].length;
	}
	var avg = total / newStr.length;
	return avg;

}

average();

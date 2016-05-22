// Write a function that accepts an array of integers in
// random order of unknown length, but with one number
// missing. Return the missing number.
function missing(arr){
	var missNum = [];
	newArray = arr.sort();
	for(var i = 0; i < newArray.length - 1; i++){
		if(newArray[i + 1] - newArray[i] !== 1){
			missNum.push(newArray[i] + 1);

		}
	}
	return missNum;
}

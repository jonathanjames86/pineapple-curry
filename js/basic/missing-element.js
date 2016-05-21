// There is an array of non-negative integers. A second array is formed by
// shuffling the elements of the first array and deleting a random element.
// Given these two arrays, find which element is missing in the second array.

// There are most concise ways to write this; this solution avoids nested loops.
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
missing();

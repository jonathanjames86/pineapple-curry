// turn an object into an array
function makeArray(obj){
	var array = Array.prototype.slice.call(obj, obj);

	return array;
}

makeArray();

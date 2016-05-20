// Write a function that accepts a number, n, and returns the nth Fibonacci
// number. Use an interative solution to this problem; if you finish with
// time left over, implement a recursive solution.
// * nthFibonacci(2); // => 2
// * nthFibonacci(3); // => 3
// * nthFibonacci(4); // => 5

function fib(arr, n) {
	var ret = [0,1];
	for(var i = 2; i < arr; i++){
		var num = 0;
		for(var j = ret.length - 1; j >= ret.length - n; j--){
			if(ret[j]){
				num += ret[j];
			}
			//console.log(ret[j]);

		}
		ret.push(num);
	}

	return ret;
}
fib(15, 8);

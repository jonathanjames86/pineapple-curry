// Given an array of numbers, return the list so that the values
// increment by 1 for each index up to the maximum value. Example:
// Input: 3,5,6,7,8
// Output: 3,4,5,6,7,8
// Assume the array will be sorted.S
function fillUp(arr){
  var result = [];
  for (var i = 0; i < arr; i++){
    if(arr[i] - arr[i - 1] !== 1){
      var x = array[i] - array[i - 1];
      var y = 1;
      while (y < x) {
        ans.push(array[i - 1] + y);
      }
    }
  }
}

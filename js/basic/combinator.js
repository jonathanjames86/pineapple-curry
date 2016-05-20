// Write a function called combinator that is given two arrays as arguments.
// The first array is an array of first names, and the second array is an
// array of last names. Have the function return a new array combining
// the first names and the last names.

// combinator([‘Jason', ‘Dan’, ‘Cahlan’], [‘Turner’, ‘Kesler’, ‘Sharp’]); →
// [‘Jason Turner’, ‘Dan Kesler’, ‘Cahlan Sharp’];
function combinator(arr1, arr2) {
  var combine = [];
  for(var i = 0; i < arr1.length; i++){
    combine[i] = (arr[i] + ' ' + arr2[i]);

  }
  return combine;
}

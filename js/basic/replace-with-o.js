// Replace all the odd numbers with the letter "O"
function replaceO(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      arr[i] = 'O';
    }
  }
  return arr;
}


replaceO([1, 2, 3, 4, 5, 6]);

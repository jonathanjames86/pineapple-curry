// diff two arrays
function diff(arr1, arr2){
  var differenceA = [];
  for(var i = 0; i < arr1.length; i++){
      if(arr1[i] !== arr2[i]){
        differenceA.push(arr1[i]);
      }

    }

  return differenceA;
}
diff([1,2,3,4], [1,2,5,6]);

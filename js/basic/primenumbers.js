// Write a function that accepts a number and returns a boolean based on whether it's a prime number.
function prime(num){
  for(var i = 2; i < num; i++){
    if(num % i === 0){
      return false;
    }
  }
  return true;

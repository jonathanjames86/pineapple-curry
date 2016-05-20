// write a function that that takes a number and returns
// its factorial. example:
// `factorial(4)` // => 24 (4 * 3 * 2 * 1 = 24)
function factorial(num){
  if(num < 0) {
    return -1
  }
  else if (num === 0){
    return 1;
  }
  else {
    return (num * factorial(num - 1);
  }
}

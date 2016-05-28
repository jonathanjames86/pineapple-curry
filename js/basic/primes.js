// sum the first 1000 primes:
// determine if number is prime,
NOT THE RIGHT ANSWER!!!!!!!!!!!!!!


  function isPrime(num) {
    for (var i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }


    }
    return true;
  }
var sumPrime = 0;
for (var j = 2; j < 1000; j++) {
  if (isPrime(j)) {
    sumPrime += ij;
  }

}
console.log(sumPrime);




//Or with a while loop;;

var sumPrime = 0;

var prime = 0;

var j = 2;

while (j < 1000) {
  if (isPrime(j)) {
    sumPrime += j;

  }
  j++;
}

console.log(sumPrime);

function addTo80(number) {
   // pretend this runs for long time
   return number + 80;
}

console.log(addTo80(5));
// DO NOT use global variables, use closure
// let cache = {};
function memoizedAddTo80() {
   let cache = {};
   // closure
   return function(number) {
      if(number in cache) {
         console.log('cache');
         return cache[number];
      } else {
         console.log('long runtime');
         cache[number] = number + 80;
         return cache[number];
      }
   }
}
const memoized = memoizedAddTo80()

console.log(memoized(5));
console.log(memoized(5));
let called = 0;
// used to show how many time fabonacci is called
function fibonacci(number) {
   called++;
   if(number < 2) {
      return number;
   }
   return fibonacci(number - 2) + fibonacci(number - 1);
}

let calledMemo = 0;
function fibonacciMemoized() {
   let cache = {};
   return function fibMem(number) {
      calledMemo++;
      // console.log(cache);
      if(number in cache) {
         return cache[number];
      } else {
         if(number < 2) {
            cache[number] = number;
            return cache[number];
         } else {
            cache[number] = fibMem(number - 2) + fibMem(number - 1);
            return cache[number];
         }
      }
   }
}

console.log(fibonacci(10));
console.log('Function call regular:', called);
const memoFabonacci = fibonacciMemoized();
console.log(memoFabonacci(10));
console.log('Function call memoized:', calledMemo);
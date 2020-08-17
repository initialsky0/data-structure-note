const calcFactorialRecursive = (value) => {
   // O(n)
   if(value <= 2){
      return value;
   }
   return value * calcFactorialRecursive(value - 1); // The key for returning in recursion is to return the function itself
}

const calcFactorialIterative = (value) => {
   // O(n)
   let result = value;
   for(value--; value > 1; value--) {
      result *= value
   }
   return result;
}

const fibonacciIterative = index => {
   // O(n)
   if(index < 2) {
      return index;
   }
   const fibonacciList = [0, 1]
   for(let i = 2; i <= index; i++){
      fibonacciList.push(fibonacciList[i - 2] + fibonacciList[i - 1])
   }
   return fibonacciList.pop();
}

const fibonacciRecursive = index => {
   // this function is O(2^n)
   // this if condition sets up 0 and 1
   if(index < 2){
      // last one, stop recursion and at the end
      return index;
   }
   return fibonacciRecursive(index - 2) + fibonacciRecursive(index - 1);
}

const reverseStrRec = str => {
   if(str.length <= 1) {
      return str;
   }
   return str.charAt(str.length - 1) + reverseStrRec(str.substr(0, str.length - 1));
}

console.log(calcFactorialRecursive(5));
console.log(calcFactorialIterative(5));
console.log(fibonacciRecursive(6));
console.log(fibonacciIterative(6));
console.log(reverseStrRec('yoyo mastery'));
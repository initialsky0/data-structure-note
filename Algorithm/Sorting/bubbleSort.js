// from start to end, shift the largest to the end sequentially

const bubbleSortFixed = (array) => {
   // The largest value is always pushed to the end of the array each iteration
   for(let i = (array.length - 1); i > 0; i--) {
      for(let j = 0; j < i; j++){
         if(array[j] > array[j + 1]){
            [array[j], array[j + 1]] = [array[j + 1], array[j]]; // swap by deconstructuring
         }
      }
   }
}

function bubbleSort(array) {
   const length = array.length;
   for (let i = 0; i < length; i++) {
     for (let j = 0; j < length; j++) { 
       if(array[j] > array[j+1]) {
         //Swap the numbers
         let temp = array[j]
         array[j] = array[j+1];
         array[j+1] = temp;
       }
     }        
   }
 }

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
bubbleSort(numbers);
console.log(numbers);
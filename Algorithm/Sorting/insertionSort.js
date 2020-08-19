// fast when the list is almost sorted
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
   for(let i = 1; i < array.length; i++) {
      if(array[i] < array[0]) {
         array.unshift(array.splice(i, 1)[0]);
      } else {
         for(let j = i - 1; j > 0; j--) {
            if(array[i] < array[j] && array[i] > array[j - 1]) {
               array.splice(j, 0, array.splice(i, 1)[0]); 
            }
         }
         
      }
   }
}

insertionSort(numbers);
console.log(numbers);
// good for almost sorted list

const selectionSort = (array) => {
   for(let i = 0; i < array.length; i++) {
      let lowestValIndex = i;
      for(let j = i + 1; j < array.length; j++) {
         if(array[j] < array[lowestValIndex]){
            lowestValIndex = j;
         }
      }

      [array[i], array[lowestValIndex]] = [array[lowestValIndex], array[i]];
   }
}
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
selectionSort(numbers);
console.log(numbers);
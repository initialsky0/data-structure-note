const quickSort = (inputArray, left, right) => {

   const array = [...inputArray];

   if(array.length < 2) {
      // selected section only having 1 or 0 item
      return array;
   } else {
      const pivot = array[right];
      while(left < right) {
         if(array[left] <= pivot) {
            left++
         } else {
            array[right] = array[left];
            array[left] = array[right - 1];
            array[right - 1] = pivot;
            right--;
         }
      }
      const leftArray = array.slice(0, right);
      const rightArray = array.slice(right + 1);
      return quickSort(leftArray, 0, leftArray.length - 1).concat(pivot).concat(quickSort(rightArray, 0, rightArray.length - 1));
   }
}

const quickSort2 = (array, left, right) => {

   if(right <= left) {
      // selected section only having 1 or 0 item
      return array;
   } else {
      const pivot = array[right];
      let leftIndex = left;
      let rightIndex = right;
      while(leftIndex < rightIndex) {
         if(array[leftIndex] <= pivot) {
            leftIndex++
         } else {
            array[rightIndex] = array[leftIndex];
            array[leftIndex] = array[rightIndex - 1];
            array[rightIndex - 1] = pivot;
            rightIndex--;
         }
      }
      // rightIndex is the pivot value index
      quickSort2(array, left, rightIndex - 1);
      quickSort2(array, rightIndex + 1, right);
      return array;
   }
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const newNumbers = quickSort(numbers, 0, numbers.length - 1);
console.log(newNumbers);

quickSort2(numbers, 0, numbers.length - 1);
console.log(numbers);
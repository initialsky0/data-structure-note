// merge sort is stable, perserve input order if equal
const mergeSort = array => {
   if(array.length === 1) {
      return array
   }
   // Split Array in into right and left
   // const left = array.splice(0, Math.floor(array.length / 2));
   // const right = array;
   // if not using splice method which have a larger time complexity
   const midIndex = Math.floor(array.length / 2);
   const left = array.slice(0, midIndex);
   const right = array.slice(midIndex);
   
   return merge(mergeSort(left), mergeSort(right))
}

const merge = (left, right) => {
   const mergedArray = [];
   let leftIndex = 0;
   let rightIndex = 0;
   while(leftIndex < left.length || rightIndex < right.length) {
      if(left[leftIndex] <= right[rightIndex] || rightIndex >= right.length) {
         // if left value is smaller or there is no more right value to compare
         mergedArray.push(left[leftIndex]);
         leftIndex++;
      } else {
         mergedArray.push(right[rightIndex]);
         rightIndex++;
      }
   }
   // console.log(left, right, mergedArray);
   return mergedArray;
}

const mergeShift = (left, right) => {
   // function using shift which have a higher time complexity, but easier to manage and read
   const mergedArray = [];
   while(left.length || right.length) {
      if(left.length === 0 || left[0] > right[0]) {
         mergedArray.push(right.shift());
      } else {
         mergedArray.push(left.shift());
      }
   }
   return mergedArray;
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const answer = mergeSort(numbers);
console.log(answer);
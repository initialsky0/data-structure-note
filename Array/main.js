const strings = ['a', 'b', 'c', 'd', 'e'];
// 5 items * 4 bytes = 20 bytes total storage

strings[2]; // O(1) to access

// push
strings.push('f'); // O(1) adding item to the end
// can be O(n) if the array have to re-allocate space for more values (usually doubled)

// pop
strings.pop(); // O(1) remove last item not iterate

// unshift
strings.unshift('x'); // O(n) 
// because this method have to loop the array to re-arrange 
// index values for elements after whats inserted (at beginning)

// splice
strings.splice(2, 0, 'a.b'); // O(n)
// splice can be used to remove or add items

console.log(strings);

// Static array have to allocate memory before hand, so if there is new value added
// the array have to be copied, then re-allocate memory,
// then paste the array with appended values(which means re-create the array).

// JS and Python array or list is dynamic

// Practice 1 
// const testStr = "This is for testing";

// const reverseStr = str => {
//    // Check for valid input
//    if(typeof(str) !== 'string') { throw Error('invalid input'); }
//    else if(!str || str.length < 2) { return str; }

//    const reverseStrArray = [];
//    for(let i = (str.length - 1); i >= 0; i--) {
//       reverseStrArray.push(str[i]);
//    }
//    return reverseStrArray.join('');
// }

// console.log(reverseStr(testStr));
// console.log(testStr.split('').reverse().join(''));


//Practice 2
const array1 = [0, 3, 4, 31];
const array2 = [4, 6, 30];

const mergeSortedArrays = (arr1, arr2) => arr1.concat(arr2).sort((a, b) => a - b);

const mergeSortedArrays2 = (arr1, arr2) => {
   // The array from parameter have to be sorted or this function won't work
   const mergedArray = [];
   let array1Item = arr1[0];
   let array2Item = arr2[0];
   let i = 1;
   let j = 1;

   // Check input
   if(arr1.length === 0) { return arr2; }
   if(arr2.length === 0) { return arr1; }

   while(array1Item || array2Item) {
      if(!array2Item || array1Item < array2Item) {
         mergedArray.push(array1Item);
         array1Item = arr1[i];
         i++;
      } else {
         mergedArray.push(array2Item);
         array2Item = arr2[j];
         j++;
      }
   }

   return mergedArray;
}

console.log(mergeSortedArrays(array1, array2));
console.log(mergeSortedArrays2(array1, array2));

// const {performance} = require('perf_hooks');
// for performance

// const nemo = ['nemo'];
// const large = new Array(100).fill('nemo');

// const findNemo = array => {
//    // array.forEach(val => {
//    //    if (val === 'nemo') {
//    //       console.log('Found NEMO');
//    //    }
//    // })

//    for(let i = 0; i < array.length; i++) {
//       if (array[i] === 'nemo') {
//          console.log('Found NEMO');
//          return 0
//       }
//    }
// } 

// findNemo(large); // O(n) -> big o of n -> Linear Time

// const boxes = [0, 1, 2, 3, 4, 5];

// const logFirstTwoBoxes = boxes => {
//    console.log(boxes[0]);  // O(1)
//    console.log(boxes[1]);  // O(1)
// }

// logFirstTwoBoxes(boxes); // O(2) -> Still constant time so still O(1)


// Log all pairs of array
// const boxes = [1, 2, 3, 4, 5];

// const logAllPairsOfArray = array => {
//    array.forEach(valA => { // O(n)
//       array.forEach(valB => { // O(n*n)
//          console.log(valA,  valB);
//       });
//    });
// }

// logAllPairsOfArray(boxes); // O(n^2)


// Space Complexity Example

// const boo = n => {
//    for (let i = 0; i < n.length; i++) {
//       console.log('boooooo!');
//    }
// }

// no control on input can be ignored
// space complexity of O(1) because it only add 1 variable of 1
// boo([1, 2, 3, 4, 5]);

// const arrayOfHiNTimes = n => {
//    let hiArray = [];
//    for (let i = 0; i < n; i++) {
//       hiArray[i] = 'hi';
//    }
//    return hiArray;
// }

// console.log(arrayOfHiNTimes(6));
// space complexity of O(n) because of the loop increased memory consumption

// Find 1st, find Nth...
// const tArray = [{
//    tweet: 'hi',
//    date: 2012
// }, {
//    tweet: 'my',
//    date: 2014
// }, {
//    tweet: 'boss',
//    date: 2018
// }];

// tArray[0]; // O(1)
// tArray[tArray.length-1]; // O(1)




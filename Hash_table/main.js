// let user = {
//    age: 30,
//    name: 'Link',
//    magic: true,
//    intro: function() {
//       console.log('Hi, my name is', this.name);
//    }
// }

// user.age; // access O(1)
// user.spell = 'fire ball'; // insert O(1)
// user.intro(); // O(1)

// const hashMap = new Map(); // allow keys to be function or array, map also maintain insertion order
// const hashSets = new Set(); // only store keys no value


array1 = [2, 5, 1, 2, 3, 5, 1, 2, 4]; // first recured 2
array2 = [2, 1, 1, 2, 3, 5, 1, 2, 4]; // fisrt recured 1
array3 = [1, 2, 3, 4, 5] // undefined

const findRecurringValue = array => {
   const occurredSet = new Set();
   for(const val of array) {
      if(occurredSet.has(val)) {
         return val;
      } else {
         occurredSet.add(val);
      }
   }
   return undefined;
}

const findRecurringValue2 = array => {
   const occurredNum = {};
   for(const val of array) {
      if(!occurredNum[val]) {
         occurredNum[val] = true;
      } else {
         return val;
      }
   }
   return undefined;
}

console.log(findRecurringValue2(array1));
console.log(findRecurringValue2(array2));
console.log(findRecurringValue2(array3));
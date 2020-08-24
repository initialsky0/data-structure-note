// input stairs, output combination, step 1 or 2
// quick solution use fabinocci number because combincations is sum of previous combination
// EX: Input 5 stair
// 4 stairs combination 1111 / 112 / 121 / 211/ 22 -> 5
// 3 stairs combination 111 / 12 / 21 -> 3
// 5 stairs combination (4 + 1) -> 11111 / 1121 / 1211 / 2111 / 221
//                      (3 + 2) -> 1112 / 122 / 212
// 3 + 5 = 8 which is fabinocci of 6 while fabinocci(4) = 3 and fabinocci(5) = 5



const climbStairs = () => {
   // cache for previous stairs increase time complexity from O(2^n) to O(n)
   const cache = {};
   // closure function to calculate combinations
   const calcStairsComb = stairs => {
      // if there is/are 0, 1, 2, 3 stairs the combination is equal to its stairs
      if(stairs <= 3) {
         if(!cache[stairs]) {
            cache[stairs] = stairs;
         }
         return cache[stairs];
      } else {
         if(cache[stairs - 1]) {
            // check if the cache for (stair - 1) exist, (stair - 2) is before so it must been cached
            return cache[stairs - 2] + cache[stairs - 1];
         }
         // if both are not cached, run itself to cache the combination
         cache[stairs - 1] = calcStairsComb(stairs - 1);
         cache[stairs - 2] = calcStairsComb(stairs - 2);
         return cache[stairs - 2] + cache[stairs - 1]
      }

   }
   return calcStairsComb;
}


const getStairsCombo = climbStairs();
// should return 8 for 5 stairs
console.log('Combination:', getStairsCombo(5));
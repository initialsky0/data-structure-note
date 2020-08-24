const street1 = [2, 16, 38, 14, 63, 42, 21, 22, 12];
const street2 = [12, 43, 97, 8, 45, 25, 7, 14, 55, 49];
const street3 = [];

const robHouse = street => {
   // O(n)
   // Two plans avaliable
   let planA = 0;
   let planB = 0;
   if(street.length < 2) {
      // if the street only have 1 or 0 house, if 1 house exist return the loot from that house, 
      // if house does not exist return planA which is currently 0
      return street[0] ? street[0] : planA;
   }
   // iterate through the street to get the total loot amount from planA(Even houses) or planB(Odd houses)
   for(let i = 1; i <= street.length; i += 2) {
      planA += street[i - 1];
      // it's possible that the last odd house does not exist
      if(street[i]) {
         planB += street[i];
      }
   }
   // return the plan with highest loot
   return Math.max(planA, planB);
}

// should have 136
console.log('Maximum loot:', robHouse(street1));

// should have 216
console.log('Maximum loot:', robHouse(street2));

// should have 0
console.log('Maximum loot:', robHouse(street3));

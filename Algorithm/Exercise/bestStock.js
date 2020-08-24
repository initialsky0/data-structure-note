const stock1 = [7, 1, 5, 3, 6, 4];
const stock2 = [7, 6, 4, 3, 1];

const getProfit = stock => {
   // O(n)
   let maxProfit = 0;
   if(stock.length < 2) {
      // if the stock data has 0 or 1 item
      return maxProfit;
   }
   let currentLowest = stock[0];
   for(let date = 1; date < stock.length; date++) {
      if(stock[date] < currentLowest) {
         // check if the stock on date is lowest, if it is update lowest price
         currentLowest = stock[date];
      } else if(stock[date] > currentLowest) {
         // update max profit based on current lowest price and potential profit
         const potentialProfit = stock[date] - currentLowest;
         if(potentialProfit > maxProfit) {
            maxProfit = potentialProfit;
         }
      }
   }
   return maxProfit;
}

// max profit is 5
console.log('Max profit:', getProfit(stock1));
// max profit is 0
console.log('Max profit:', getProfit(stock2));
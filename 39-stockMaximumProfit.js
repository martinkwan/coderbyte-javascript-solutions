//You will be given a list of stock prices for a given day and your goal is to return the maximum profit that could have been made by buying a stock at the given price and then selling the stock later on. 
//For example if the input is: [45, 24, 35, 31, 40, 38, 11] then your program should return 16 because if you bought the stock at $24 and sold it at $40, a profit of $16 was made and this is the largest profit that could be made. 
//If no profit could have been made, return -1.

var myArray = [45, 24, 35, 31, 40, 38, 11];

function stocks(array){
  var obj = {};
  obj.profit = -1;
  obj.buy = Infinity;
  obj.sell;
  var tempSell;
  var tempBuy;
  var tempProfit;
  //loop through each number in array
  for(var i = 0; i < array.length; i++){
  	//set next number to be temporary selling price
  	tempSell = array[i+1];
    //if current number is less than lowBuy, set tempBuy to curr[i]
    if(array[i] < obj.buy){
    	tempBuy = array[i];
    }
    tempProfit = tempSell - tempBuy;
    //if current profit is greater than max profit, update obj values
    if(tempProfit > obj.profit){
      obj.buy = tempBuy;
      obj.sell = tempSell;
      obj.profit = tempProfit;
    }
  }
  return obj;
}
    
console.log(stocks(myArray));
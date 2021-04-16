// Takes in array of price as parametr
//return the max possible profit of the day

// Notes:
// - If not profit is possible return -1
// - A maax profit of 0 is treated as any other max profit value

function maxStockProfit(pricessArray) {
    var maxProfit = -1;
    var buyPrice = 0;
    var sellPrice = 0;
    var changeBuyPrice = true;

    for (let i = 0; i < pricessArray.length; i++) {
        if(changeBuyPrice){
            buyPrice = pricessArray[i];
        }
        sellPrice = pricessArray[i+1];

        if(sellPrice < buyPrice){
            changeBuyPrice = true;
        }else {
            var tempProfit = sellPrice - buyPrice;
            if(tempProfit > maxProfit){
                maxProfit = tempProfit;
            }
            changeBuyPrice = false;
        }
        
    }
    return maxProfit;
}

console.log(maxStockProfit([32,46,26,38,40,48,42]))

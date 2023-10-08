function bitcoin(input) {
    
    
    let currLeva = 0;
    let totalLeva = 0;

    let bitcoinCount = 0;
    let firstPurchase = 0;

    let moneyLeft = 0;
    let daysCoutn = 1; 
    let index = 0;

    while (index <= input.length - 1) {
        let currGrams = input[index];
        
        if (daysCoutn % 3 == 0) {
            currGrams *= 0.7; 
        }
        
        currLeva = (currGrams * 67.51); 
        totalLeva += currLeva;

       
        if (totalLeva >= 11949.16) {
            bitcoinCount++;  
            moneyLeft = totalLeva - 11949.16;
            totalLeva = moneyLeft;

            if (bitcoinCount == 1) {
                firstPurchase = daysCoutn;}    

            let j = totalLeva;

            while (j >= 11949.16) {
                bitcoinCount++;
                moneyLeft = totalLeva - 11949.16;
                totalLeva = moneyLeft;

                j -= 11949.16;           
            } 
            
        } else {
            moneyLeft = totalLeva;
        }
       
        daysCoutn++;
        index++;

    }   console.log(`Bought bitcoins: ${bitcoinCount}`);
        if (firstPurchase != 0) {
            console.log(`Day of the first purchased bitcoin: ${firstPurchase}`); 
        }
        console.log(`Left money: ${moneyLeft.toFixed(2)} lv.`);


}
bitcoin([3124.15, 504.212, 2511.124]);
function spiceMustFlow(start){
    let totalAmount = 0;
    let daysCount = 0;
    let minePerDay = start;


    while (minePerDay >= 100) {
        totalAmount += minePerDay;
        totalAmount -= 26;
        daysCount++;
        minePerDay -= 10 
       
    } if (totalAmount >= 26) {
        totalAmount -= 26;
    }else {
    }


    console.log(daysCount);
    console.log(totalAmount);

}
spiceMustFlow(111);
//spiceMustFlow(450);
function experienceGaining (input) {
    let xpNeeded = Number(input.shift());
    let battlesCount = Number(input.shift());
    
    
    let xpGained = 0;
    let battles = 1;

    let currBattle = Number(input.shift());
   
    while (battles <= battlesCount && xpGained < xpNeeded) {
        
        if (battles % 3 == 0) { 
            currBattle *= 1.15;
            
        }
        if (battles % 5 == 0) {
            currBattle *= 0.9;
            
        }
        if (battles % 15 == 0) {
            currBattle *= 1.05;
            
        }   
        xpGained += currBattle;

        if (xpGained >= xpNeeded) {
            break;
        }
        battles++;
        currBattle = Number(input.shift());

    }     
        if (xpGained >= xpNeeded) {
        console.log(`Player successfully collected his needed experience for ${battles} battles.`);
        } else {
        let xpLeft = xpNeeded - xpGained;
        console.log(`Player was not able to collect the needed experience, ${xpLeft.toFixed(2)} more needed.`);
    } 
}

 
//experienceGaining(([500, 5, 50, 100, 200, 100, 30]));
experienceGaining(([500, 5, 50, 100, 200, 100, 20]));
// experienceGaining(([400, 5, 50, 100, 200, 100, 20]));
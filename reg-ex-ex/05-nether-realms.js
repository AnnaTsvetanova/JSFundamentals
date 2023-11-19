function netherRealms (input) {
    let demons = input.split(', ').sort((a, b) => a.localeCompare(b));
    
    let healthPattern = /[^0-9*\-\/.]/g;
    let health = 0;
    let damage = 0;
    
    
    for (let demon of demons) {

        if(demon.length < 1 || demon.includes(' ' || ',')) {
            break;
        }
        
        let match = demon.match(healthPattern);
        
        if(match) {

            let healthStr = match.join('');
            
            
            for (let char of healthStr) {
        let code = char.charCodeAt();
        health += code;
    }
}

    let damageNumsPattern = /[+-]?\d+\.?\d*/g;
    let damageNumsMatch = demon.match(damageNumsPattern);

    if (damageNumsMatch) {    

        let baseDamage = damageNumsMatch.reduce((acc, val) => acc + parseFloat(val), 0);   
   
        let symbolDamagePattern = /[*\/]/g;
    
        let symbolDamageMatch = demon.match(symbolDamagePattern);
    
    if(symbolDamageMatch) {
        
        for (let symbol of symbolDamageMatch) {
            
            if(symbol == '*') {

                baseDamage *= 2;
            } else {
                baseDamage /= 2;
            }
        }}
        damage = baseDamage;
    }  else {
        damage = 0;
    }  
    
    console.log(`${demon} - ${health} health, ${damage.toFixed(2)} damage`);
    health = 0;
} 
}
netherRealms('M3ph1st0**, Azazel');
//netherRealms('M3ph-0.5s-0.5t0.0**');
//netherRealms('Gos/ho');
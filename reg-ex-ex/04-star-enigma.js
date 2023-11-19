function starEnigma (input) {
    
    let msgCount = Number(input.shift());
    let decryptedMsgs = [];
    
    let pattern = /[star]/gi;
    
    
    for (let i = 0; i < msgCount; i++) {
        
        let msg = input[i];
        let decryptedMsg = ''
        
        let match = msg.match(pattern);
                
        if (match) {
            let count = match.length;

            for (let char of msg) {
                let code = char.charCodeAt();
                code -= count;

                let newChar = String.fromCharCode(code);
                decryptedMsg += newChar;
            }
        } else {
            decryptedMsg = msg;
        }

        decryptedMsgs.push(decryptedMsg);
    
    }

    let planetPattern = /@(?<name>[A-Z][a-z]+)[^-@!:>]*:(?<population>\d+)[^-@!:>]*!(?<attack>[AD])![^-@!:>]*->(?<soldiers>\d+)/;
    
    let attackedPlanets = [];
    let destroyedPlanets = [];
    
    for (let message of decryptedMsgs) {
    
        let decMatches = message.match(planetPattern);

        if(decMatches) {
        let { name, attack } = decMatches.groups;
        
        if (attack == 'A') {
            attackedPlanets.push(name);
        } else {
            destroyedPlanets.push(name);
        }
        attackedPlanets.sort((a, b) => a.localeCompare(b));
        destroyedPlanets.sort((a, b) => a.localeCompare(b));
        }
        
    }   
    console.log(`Attacked planets: ${attackedPlanets.length}`);
    attackedPlanets.forEach(planet => console.log(`-> ${planet}`));
    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    destroyedPlanets.forEach(planet => console.log(`-> ${planet}`));
    
 }
    
// starEnigma(['2', 
// 'STCDoghudd4=63333$D$0A53333', 
// 'EHfsytsnhf?8555&I&2C9555SR']);

starEnigma(['3',
"tt(''DGsvywgerx>6444444444%H%1B9444",
'GQhrr|A977777(H(TTTT',
'EHfsytsnhf?8555&I&2C9555SR']);
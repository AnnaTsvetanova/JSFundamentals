function treasureHunt (arr) {
    let chest = arr.shift().split('|');
    let command = arr.shift();
    
      while (command != 'Yohoho!') {
        let tokens = command.split(' ');
        let action = tokens.shift();

            if (action ==  'Loot') {
                
                let items = tokens
                .filter(item => !chest.includes(item))
                .forEach(item => chest.unshift(item));
               
            } else if (action == 'Drop') {
                let idx = Number(tokens.shift());

                if (idx >= 0 && idx < chest.length) {
                    let removed = chest.splice(idx, 1).shift();
                chest.push(removed);}

            } else if (action == 'Steal') {
                let count = Number(tokens.shift());
                let stolen = chest.splice(-count);
                console.log(stolen.join(', '));
            }
            command = arr.shift(); 
             
          
        } if (chest.length == 0) {
            console.log('Failed treasure hunt.');
            return;
        } else {
            let avg = chest.reduce((acc, val) => acc + val.length, 0) / chest.length;
        console.log(`Average treasure gain: ${avg.toFixed(2)} pirate credits.`);
        } }
    
treasureHunt((
    ["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"]));
// treasureHunt((
//     ["Diamonds|Silver|Shotgun|Gold", 
//     "Loot Silver Medals Coal", 
//     "Drop -1", 
//     "Drop 1", 
//     "Steal 6", 
//     "Yohoho!"]));